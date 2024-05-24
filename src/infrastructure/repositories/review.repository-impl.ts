import { ReviewRepository } from '../../application/repositories/review.repository';
import { ICreateReviewRequestDTO } from '../../domain/dtos/create-review.dto';
import { ReviewEntity } from '../../domain/entities/review.entity';
import { DBClient } from '../database/db.client-impl';

export class ReviewRepositoryImpl implements ReviewRepository {
  constructor(private readonly dbClient: DBClient) {}

  async create(createDto: ICreateReviewRequestDTO): Promise<ReviewEntity> {
    return await this.dbClient.review.create(createDto);
  }

  async findAll(): Promise<ReviewEntity[]> {
    return await this.dbClient.review.findAll();
  }
}
