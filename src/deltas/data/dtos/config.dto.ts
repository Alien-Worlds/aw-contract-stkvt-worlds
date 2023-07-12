/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:58:02 GMT
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
  time_multiplier?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ConfigRawModel
 */
export type ConfigRawModel = {
  time_multiplier?: number;
  [key: string]: unknown;
};

