import {
  IDBClient,
  IDBClientConfig,
  IDBClientReview,
} from '../../application/dbClients/db.client';
import { ICreateReviewRequestDTO } from '../../domain/dtos/create-review.dto';
import { ConfigEntity } from '../../domain/entities/config.entity';
import { ReviewEntity } from '../../domain/entities/review.entity';

const config_data = require('./store/config_data.json');
const review_data = require('./store/review_data.json');

export class DBClient implements IDBClient {
  public config = {
    find: async (platform: string): Promise<ConfigEntity> => {
      return config_data.find((c: ConfigEntity) => c.platform === platform);
    },
  } as IDBClientConfig;

  public review = {
    create: async (data: ICreateReviewRequestDTO): Promise<ReviewEntity> => {
      review_data.push(data);

      return data as ReviewEntity;
    },
    findAll: async (): Promise<ReviewEntity[]> => {
      return review_data;
    },
  } as IDBClientReview;
}
