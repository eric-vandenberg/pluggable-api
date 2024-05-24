import { readdirSync } from 'node:fs';
import path from 'node:path';

class PlatformContainerImpl {
  private instances: { [key: string]: any } = {};
  public platforms: string[] = [];

  constructor() {}

  async init(): Promise<void> {
    try {
      const providersDirectory = path.resolve(
        path.join(process.cwd(), './src/infrastructure/providers/platform')
      );
      const files = readdirSync(providersDirectory);

      for (let file of files) {
        const trimFile = path.parse(file).name;

        const ProviderClass = require(`${providersDirectory}/${trimFile}`);

        const Instance = new ProviderClass.default();

        this.register(Instance.name, Instance);
      }
    } catch (err) {
      console.log('error: ', err);
    }
  }

  register(key: string, instance: any): void {
    this.platforms.push(key);
    this.instances[key] = instance;
  }

  resolve<T>(key: string): T {
    return this.instances[key];
  }
}

const container = new PlatformContainerImpl();

void container.init();

export default container;
