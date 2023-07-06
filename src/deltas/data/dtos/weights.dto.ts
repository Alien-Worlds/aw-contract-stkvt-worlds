/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:20:55 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} WeightsMongoModel
 */
export type WeightsMongoModel = {
  _id?: MongoDB.ObjectId;
  voter?: string;
  weight?: MongoDB.Long;
  weight_quorum?: MongoDB.Long;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} WeightsRawModel
 */
export type WeightsRawModel = {
  voter?: string;
  weight?: bigint;
  weight_quorum?: bigint;
  [key: string]: unknown;
};

