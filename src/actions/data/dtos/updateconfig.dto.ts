/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:27:33 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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
  time_multiplier?: number;
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
  time_multiplier?: number;
  [key: string]: unknown;
};

