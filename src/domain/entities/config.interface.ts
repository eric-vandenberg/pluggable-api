/**
 * Interface representing the structure of a configuration.
 *
 * @interface
 */
export interface IConfig {
  id: string;
  platform: string;
  version: string;
  api: string;
  create_map: object;
  fetch_map: object;
  updated_at: Date;
  created_at: Date;
}
