import { ConfigEntity } from '../../domain/entities/config.entity';

export abstract class ConfigRepository {
  abstract find(platform: string): Promise<ConfigEntity>;
}
