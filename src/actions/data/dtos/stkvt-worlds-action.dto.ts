/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 30 Jun 2023 10:14:22 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { BalanceobsvMongoModel } from './balanceobsv.dto';
import { StakeobsvMongoModel } from './stakeobsv.dto';
import { UpdateconfigMongoModel } from './updateconfig.dto';

export type DataDocumentType =
  | BalanceobsvMongoModel
  | StakeobsvMongoModel
  | UpdateconfigMongoModel;

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

