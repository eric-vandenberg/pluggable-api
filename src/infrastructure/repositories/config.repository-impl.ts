import { ConfigRepository } from '../../application/repositories/config.repository';
import { ConfigEntity } from '../../domain/entities/config.entity';
import { DBClient } from '../database/db.client-impl';

export class ConfigRepositoryImpl implements ConfigRepository {
  constructor(private readonly dbClient: DBClient) {}

  async find(platform: string): Promise<ConfigEntity> {
    return await this.dbClient.config.find(platform);
  }
}
