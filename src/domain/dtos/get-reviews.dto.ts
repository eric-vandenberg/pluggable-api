/**
 * Data Transfer Object (DTO) representing the output review data.
 *
 * @interface
 */
export interface IGetReviewRequestDTO {
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
