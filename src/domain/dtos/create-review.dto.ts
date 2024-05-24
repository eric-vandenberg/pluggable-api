/**
 * Data Transfer Object (DTO) representing the request to create a new review.
 *
 * @interface
 */
export interface ICreateReviewRequestDTO {
  /**
   * The title of the review.
   */
  title: string;

  /**
   * The rating of the review.
   */
  rating: number;

  /**
   * The description of the review.
   */
  description: string;
}
