/**
 * Data Transfer Object (DTO) representing the output configuration data.
 *
 * @interface
 */
export interface IConfigOutRequestDTO {
  /**
   * The ID of the configuration.
   */
  id: string;

  /**
   * The platform of the configuration.
   */
  platform: string;

  /**
   * The version of the configuration.
   */
  version: string;

  /**
   * The api of the configuration.
   */
  api: string;

  /**
   * The create mapping of the configuration.
   */
  create_map: object;

  /**
   * The fetch mapping of the configuration.
   */
  fetch_map: object;

  /**
   * The update date of the configuration.
   */
  updated_at: Date;

  /**
   * The creation date of the configuration.
   */
  created_at: Date;
}
