import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';

import { PlatformProvider } from '../../../application/providers/platform/platform.provider';
import { IGetReviewRequestDTO } from '../../../domain/dtos/get-reviews.dto';
import { ICreateReviewRequestDTO } from '../../../domain/dtos/create-review.dto';

interface PlatformAReview {
  /**
   * The header of the review.
   */
  header: string;

  /**
   * The rating of the review.
   */
  rating: string;

  /**
   * The description of the review.
   */
  summary: string;

  /**
   * The recommendation of the review.
   */
  recommendation: boolean;
}

export default class PlatformAProviderImpl implements PlatformProvider {
  public name: string;

  constructor() {
    this.name = 'platformA';
  }

  async fetch(fetchMap: object): Promise<IGetReviewRequestDTO[]> {
    const reviewFactory = Factory.Sync.makeFactory<PlatformAReview>({
      header: Factory.each((i) => faker.lorem.sentence()),
      rating: Factory.each((i) =>
        faker.number.int({ min: 0, max: 500 }).toString()
      ),
      summary: Factory.each((i) => faker.lorem.paragraph()),
      recommendation: Factory.each((i) => faker.datatype.boolean()),
    });

    const reviews = reviewFactory.buildList(10);

    return this.convertOut(reviews, fetchMap);
  }

  async create(payload: ICreateReviewRequestDTO, createMap: object) {
    // await providerApi.post(this.convertIn(payload, createMap));

    return payload;
  }

  async convertIn(payload: ICreateReviewRequestDTO, createMap: object) {
    return {
      header: payload.title,
      rating: String(payload.rating),
      summary: payload.description,
    };
  }

  convertOut(
    reviews: PlatformAReview[],
    fetchMap: object
  ): IGetReviewRequestDTO[] {
    const initializer: IGetReviewRequestDTO[] = [];

    return reviews.reduce((accm, review) => {
      const accum = accm;
      const { header, rating, summary } = review;
      const reconstruction: IGetReviewRequestDTO = {
        title: header,
        rating: Number(rating) - (Number(rating) % 50),
        description: summary,
      };

      accum.push(reconstruction);

      return accum;
    }, initializer);
  }
}
