/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 30 Jun 2023 10:14:22 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UpdateconfigMongoModel
 */
export type UpdateconfigMongoModel = {
  _id?: MongoDB.ObjectId;
  new_config?: ConfigItemMongoModel;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} ConfigItemMongoModel
 */
export type ConfigItemMongoModel = {
  _id?: MongoDB.ObjectId;
  time_multiplier?: MongoDB.Long;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UpdateconfigRawModel
 */
export type UpdateconfigRawModel = {
  new_config?: ConfigItemRawModel;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} ConfigItemRawModel
 */
export type ConfigItemRawModel = {
  time_multiplier?: bigint;
  [key: string]: unknown;
};

