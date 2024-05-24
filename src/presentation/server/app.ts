import 'dotenv/config';
import { AppRoutes } from './routers/app.router';
import { Server } from './server';

(() => {
  main();
})();

function main(): void {
  const server = new Server({
    port: Number(process.env.PORT),
    apiPrefix: process.env.API_VERSION!,
    routes: AppRoutes.routes,
  });
  void server.start();
}
