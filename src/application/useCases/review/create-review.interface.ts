import { ICreateReviewRequestDTO } from '../../../domain/dtos/create-review.dto';
import { ResponseDTO } from '../../../domain/dtos/response.dto';

export interface ICreateReviewUseCase {
  execute(
    platform: string,
    payload: ICreateReviewRequestDTO
  ): Promise<ResponseDTO>;
}
