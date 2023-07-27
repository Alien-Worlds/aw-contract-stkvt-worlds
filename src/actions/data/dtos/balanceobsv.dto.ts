/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:27:33 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { AssetMongoModel, AssetRawModel } from '@alien-worlds/aw-antelope';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} BalanceobsvMongoModel
 */
export type BalanceobsvMongoModel = {
  _id?: MongoDB.ObjectId;
  balance_deltas?: AccountBalanceDeltaMongoModel[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AccountBalanceDeltaMongoModel
 */
export type AccountBalanceDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  balance_delta?: AssetMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} BalanceobsvRawModel
 */
export type BalanceobsvRawModel = {
  balance_deltas?: AccountBalanceDeltaRawModel[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AccountBalanceDeltaRawModel
 */
export type AccountBalanceDeltaRawModel = {
  account?: string;
  balance_delta?: AssetRawModel;
  [key: string]: unknown;
};

