import { ResponseDTO } from '../../../domain/dtos/response.dto';

export interface IGetReviewsUseCase {
  execute(platform: string): Promise<ResponseDTO>;
}
