import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';

import { PlatformProvider } from '../../../application/providers/platform/platform.provider';
import { IGetReviewRequestDTO } from '../../../domain/dtos/get-reviews.dto';
import { ICreateReviewRequestDTO } from '../../../domain/dtos/create-review.dto';

interface PlatformBReview {
  /**
   * The subject of the review.
   */
  subject: string;

  /**
   * The rating of the review.
   */
  rating: string;

  /**
   * The description of the review.
   */
  details: string;
}

export default class PlatformBProviderImpl implements PlatformProvider {
  public name: string;

  constructor() {
    this.name = 'platformB';
  }

  async fetch(fetchMap: object): Promise<IGetReviewRequestDTO[]> {
    const reviewFactory = Factory.Sync.makeFactory<PlatformBReview>({
      subject: Factory.each((i) => faker.lorem.sentence()),
      rating: Factory.each((i) =>
        faker.number.int({ min: 0, max: 500 }).toString()
      ),
      details: Factory.each((i) => faker.lorem.paragraph()),
    });

    const reviews = reviewFactory.buildList(10);

    return this.convertOut(reviews, fetchMap);
  }

  async create(payload: ICreateReviewRequestDTO, createMap: object) {
    // await providerClient.post(this.convertIn(payload, createMap));

    return payload;
  }

  async convertIn(payload: ICreateReviewRequestDTO, createMap: object) {
    return {
      subject: payload.title,
      rating: String(payload.rating),
      details: payload.description,
    };
  }

  convertOut(
    reviews: PlatformBReview[],
    fetchMap: object
  ): IGetReviewRequestDTO[] {
    const initializer: IGetReviewRequestDTO[] = [];

    return reviews.reduce((accm, review) => {
      const accum = accm;
      const { subject, rating, details } = review;
      const reconstruction: IGetReviewRequestDTO = {
        title: subject,
        rating: Number(rating) - (Number(rating) % 50),
        description: details,
      };

      accum.push(reconstruction);

      return accum;
    }, initializer);
  }
}
