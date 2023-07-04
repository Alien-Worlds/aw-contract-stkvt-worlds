/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:32 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ConfigMongoModel
 */
export type ConfigMongoModel = {
  _id?: MongoDB.ObjectId;
  time_multiplier?: MongoDB.Long;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ConfigRawModel
 */
export type ConfigRawModel = {
  time_multiplier?: bigint;
  [key: string]: unknown;
};

