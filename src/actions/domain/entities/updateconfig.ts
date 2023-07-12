/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:58:02 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Updateconfig` object.
 *
 * @class
 */
export class Updateconfig implements Entity {
  /**
   * Constructs a new instance of the `Updateconfig` class.
   *
   * @public
   * @constructor
   * @param ConfigItem newConfig
   * @param string dacId
   * @param string [id]
   * @returns `Updateconfig` - An instance of the `Updateconfig` class.
   */
  public constructor(
    public newConfig: ConfigItem,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Updateconfig` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      newConfig: this.newConfig,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Updateconfig` class.
   *
   * @static
   * @public
   * @param ConfigItem newConfig
   * @param string dacId
   * @returns `Updateconfig` An instance of the `Updateconfig` class.
   */
  public static create(
    newConfig: ConfigItem,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Updateconfig {
    const entity = new Updateconfig(
      newConfig,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Updateconfig {
    return new Updateconfig(
      ConfigItem.getDefault(),
      '',
    );
  }
}

/**
 * Represents a `ConfigItem` object.
 *
 * @class
 */
export class ConfigItem implements Entity {
  /**
   * Constructs a new instance of the `ConfigItem` class.
   *
   * @public
   * @constructor
   * @param number timeMultiplier
   * @param string [id]
   * @returns `ConfigItem` - An instance of the `ConfigItem` class.
   */
  public constructor(
    public timeMultiplier: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `ConfigItem` class to a JSON object.
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
   * Creates an instance of the `ConfigItem` class.
   *
   * @static
   * @public
   * @param number timeMultiplier
   * @returns `ConfigItem` An instance of the `ConfigItem` class.
   */
  public static create(
    timeMultiplier: number,
    id?: string,
    rest?: UnknownObject
  ): ConfigItem {
    const entity = new ConfigItem(
      timeMultiplier,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): ConfigItem {
    return new ConfigItem(
      0,
    );
  }
}

