import { ICreateReviewRequestDTO } from '../../../domain/dtos/create-review.dto';
import { IGetReviewRequestDTO } from '../../../domain/dtos/get-reviews.dto';

export abstract class PlatformProvider {
  constructor() {}
  abstract fetch(fetchMap: object): Promise<IGetReviewRequestDTO[]>;
  abstract create(
    payload: ICreateReviewRequestDTO,
    createMap: object
  ): Promise<IGetReviewRequestDTO>;
  abstract convertIn(payload: ICreateReviewRequestDTO, createMap: object): any;
  abstract convertOut(reviews: {}[], fetchMap: object): IGetReviewRequestDTO[];
}
