/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:57:31 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Config` object.
 *
 * @class
 */
export class Config implements Entity {
  /**
   * Constructs a new instance of the `Config` class.
   *
   * @public
   * @constructor
   * @param bigint timeMultiplier
   * @param string [id]
   * @returns `Config` - An instance of the `Config` class.
   */
  public constructor(
    public timeMultiplier: bigint,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Config` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      timeMultiplier: this.timeMultiplier,
    };
  }

  /**
   * Creates an instance of the `Config` class.
   *
   * @static
   * @public
   * @returns `Config` An instance of the `Config` class.
   */
  public static create(
    timeMultiplier: bigint,
    id?: string,
    rest?: UnknownObject
  ): Config {
    const entity = new Config(
      timeMultiplier,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Config {
    return new Config(
      0n,
    );
  }
}

