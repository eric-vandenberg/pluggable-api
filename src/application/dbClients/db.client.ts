import { ICreateReviewRequestDTO } from '../../domain/dtos/create-review.dto';
import { ConfigEntity } from '../../domain/entities/config.entity';
import { ReviewEntity } from '../../domain/entities/review.entity';

/**
 * Interface for the DBClient handling configuration data.
 *
 * @interface
 */
export interface IDBClientConfig {
  /**
   * Retrieves a configuration.
   *
   * @async
   * @returns {Promise<ConfigEntity>} The configuration.
   */
  find(platform: string): Promise<ConfigEntity>;
}

/**
 * Interface for the DBClient handling configuration data.
 *
 * @interface
 */
export interface IDBClientReview {
  /**
   * Creates a new review with the provided data.
   *
   * @async
   * @param {ICreateReviewRequestDTO} data - The review data to be created.
   * @returns {Promise<ReviewEntity>} The created review data.
   */
  create(data: ICreateReviewRequestDTO): Promise<ReviewEntity>;

  /**
   * Retrieves a list of reviews.
   *
   * @async
   * @returns {Promise<ReviewEntity[]>} The list of reviews.
   */
  findAll(): Promise<ReviewEntity[]>;
}

/**
 * Interface for the DBClient handling configuration data.
 *
 * @interface
 */
export interface IDBClient {
  config: IDBClientConfig;
  review: IDBClientReview;
}
