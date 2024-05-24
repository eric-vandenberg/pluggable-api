import {
  type Server as ServerHttp,
  type IncomingMessage,
  type ServerResponse,
} from 'node:http';
import express, { type Router, type Request, type Response } from 'express';
import rateLimit from 'express-rate-limit';
import { StatusCodes } from 'http-status-codes';

interface ServerOptions {
  port: number;
  routes: Router;
  apiPrefix: string;
}

export class Server {
  public readonly app = express();
  private serverListener?: ServerHttp<
    typeof IncomingMessage,
    typeof ServerResponse
  >;
  private readonly port: number;
  private readonly routes: Router;
  private readonly apiPrefix: string;

  constructor(options: ServerOptions) {
    const { port, routes, apiPrefix } = options;
    this.port = port;
    this.routes = routes;
    this.apiPrefix = apiPrefix;
  }

  async start(): Promise<void> {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      rateLimit({
        max: 100,
        windowMs: 60 * 60 * 1000,
        message: 'Too many requests from this IP, please try again in one hour',
      })
    );

    this.app.use((req, res, next) => {
      const allowedOrigins = ['http://localhost:3000'];
      const origin = req.headers.origin;

      if (allowedOrigins.includes(origin!)) {
        res.setHeader('Access-Control-Allow-Origin', origin!);
      }
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });

    this.app.use(this.apiPrefix, this.routes);

    this.app.get('/health', (_req: Request, res: Response) => {
      return res.status(StatusCodes.OK).json({
        data: 'System OK!',
      });
    });

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}...`);
    });
  }

  close(): void {
    this.serverListener?.close();
  }
}
