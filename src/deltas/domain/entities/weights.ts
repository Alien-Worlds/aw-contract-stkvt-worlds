/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:32 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Weights` object.
 *
 * @class
 */
export class Weights implements Entity {
  /**
   * Constructs a new instance of the `Weights` class.
   *
   * @public
   * @constructor
   * @param string voter
   * @param bigint weight
   * @param bigint weightQuorum
   * @param string [id]
   * @returns `Weights` - An instance of the `Weights` class.
   */
  public constructor(
    public voter: string,
    public weight: bigint,
    public weightQuorum: bigint,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Weights` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      voter: this.voter,
      weight: this.weight,
      weightQuorum: this.weightQuorum,
    };
  }

  /**
   * Creates an instance of the `Weights` class.
   *
   * @static
   * @public
   * @returns `Weights` An instance of the `Weights` class.
   */
  public static create(
    voter: string,
    weight: bigint,
    weightQuorum: bigint,
    id?: string,
    rest?: UnknownObject
  ): Weights {
    const entity = new Weights(
      voter,
      weight,
      weightQuorum,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Weights {
    return new Weights(
      '',
      0n,
      0n,
    );
  }
}

