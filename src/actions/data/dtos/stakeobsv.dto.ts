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
 * @typedef {Object} StakeobsvMongoModel
 */
export type StakeobsvMongoModel = {
  _id?: MongoDB.ObjectId;
  stake_deltas?: AccountStakeDeltaMongoModel[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AccountStakeDeltaMongoModel
 */
export type AccountStakeDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  stake_delta?: AssetMongoModel;
  unstake_delay?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} StakeobsvRawModel
 */
export type StakeobsvRawModel = {
  stake_deltas?: AccountStakeDeltaRawModel[];
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} AccountStakeDeltaRawModel
 */
export type AccountStakeDeltaRawModel = {
  account?: string;
  stake_delta?: AssetRawModel;
  unstake_delay?: number;
  [key: string]: unknown;
};

