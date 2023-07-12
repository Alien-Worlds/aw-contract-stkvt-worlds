/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:58:02 GMT
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
  weight?: number;
  weight_quorum?: number;
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
  weight?: number;
  weight_quorum?: number;
  [key: string]: unknown;
};

