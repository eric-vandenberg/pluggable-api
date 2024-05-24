import { IConfig } from './config.interface';

/**
 * Class representing a configuration.
 *
 * @class
 */
export class ConfigEntity {
  private _id: string;
  private _platform: string;
  private _version: string;
  private _api: string;
  private _create_map: object;
  private _fetch_map: object;
  private _updated_at: Date;
  private _created_at: Date;

  /**
   * Gets the configuration's id.
   *
   * @readonly
   */
  get id(): string {
    return this._id;
  }

  /**
   * Gets the configuration's platform.
   *
   * @readonly
   */
  get platform(): string {
    return this._platform;
  }

  /**
   * Gets the configuration's version.
   *
   * @readonly
   */
  get version(): string {
    return this._version;
  }

  /**
   * Gets the configuration's api.
   *
   * @readonly
   */
  get api(): string {
    return this._api;
  }

  /**
   * Gets the configuration's create map.
   *
   * @readonly
   */
  get create_map(): object {
    return this._create_map;
  }

  /**
   * Gets the configuration's fetch map.
   *
   * @readonly
   */
  get fetch_map(): object {
    return this._fetch_map;
  }

  /**
   * Gets the configuration's created date.
   *
   * @readonly
   */
  get created_at(): Date {
    return this._created_at;
  }

  /**
   * Gets the configuration's updated date.
   *
   * @readonly
   */
  get updated_at(): Date {
    return this._updated_at;
  }

  /**
   * Creates an instance of configuration.
   *
   * @constructor
   * @param {IConfig} opts - The properties of the configuration.
   */
  constructor(opts: IConfig) {
    this._id = opts.id;
    this._platform = opts.platform;
    this._version = opts.version;
    this._api = opts.api;
    this._create_map = opts.create_map;
    this._fetch_map = opts.fetch_map;
    this._updated_at = opts.updated_at;
    this._created_at = opts.created_at;
  }
}
