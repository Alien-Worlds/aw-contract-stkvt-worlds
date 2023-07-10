/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:44:27 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { BalanceobsvMongoModel, BalanceobsvRawModel } from './balanceobsv.dto';
import { StakeobsvMongoModel, StakeobsvRawModel } from './stakeobsv.dto';
import { UpdateconfigMongoModel, UpdateconfigRawModel } from './updateconfig.dto';

export type DataDocumentType =
  | BalanceobsvMongoModel
  | StakeobsvMongoModel
  | UpdateconfigMongoModel;

export type DataRawType =
  | BalanceobsvRawModel
  | StakeobsvRawModel
  | UpdateconfigRawModel;

export type StkvtWorldsActionMongoModel = {
  _id?: MongoDB.ObjectId;
  block_timestamp?: Date;
  block_number?: MongoDB.Long;
  global_sequence?: MongoDB.Long;
  receiver_sequence?: MongoDB.Long;
  trx_id?: string;
  action_hash?: string;
  action?: {
    account: string;
    name: string;
    data: DataDocumentType;
  };
};

export type StkvtWorldsActionRawModel = {
  account: string;
  name: string;
  block_timestamp: Date;
  block_number: string;
  global_sequence: string;
  recv_sequence: string;
  transaction_id: string;
  data: DataRawType;
  [key: string]: unknown;
};

