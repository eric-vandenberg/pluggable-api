import { IReview } from './review.interface';
import { ICreateReviewRequestDTO } from '../dtos/create-review.dto';

/**
 * Class representing a review.
 *
 * @class
 */
export class ReviewEntity {
  private _title: string;
  private _rating: number;
  private _description: string;

  /**
   * Creates a new review instance based on the provided data.
   *
   * @static
   * @param {ICreateReviewRequestDTO} data - The data to create a review.
   * @returns {ReviewEntity} The created review instance.
   */
  static create({
    title,
    rating,
    description,
  }: ICreateReviewRequestDTO): ReviewEntity {
    return new ReviewEntity({ title, rating, description });
  }

  /**
   * Gets the review's title.
   *
   * @readonly
   */
  get title(): string {
    return this._title;
  }

  /**
   * Gets the review's rating.
   *
   * @readonly
   */
  get rating(): number {
    return this._rating;
  }

  /**
   * Gets the review's description.
   *
   * @readonly
   */
  get description(): string {
    return this._description;
  }

  /**
   * Creates an instance of review.
   *
   * @constructor
   * @param {IReview} opts - The properties of the review.
   */
  constructor(opts: IReview) {
    this._title = opts.title;
    this._rating = opts.rating;
    this._description = opts.description;
  }
}
