import { ICreateReviewRequestDTO } from '../../domain/dtos/create-review.dto';
import { IGetReviewRequestDTO } from '../../domain/dtos/get-reviews.dto';

export abstract class ReviewRepository {
  abstract create(data: ICreateReviewRequestDTO): Promise<IGetReviewRequestDTO>;
  abstract findAll(): Promise<IGetReviewRequestDTO[]>;
}
