/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:32 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { ConfigMongoModel } from './config.dto';
import { WeightsMongoModel } from './weights.dto';

export type DataDocumentType =
  | ConfigMongoModel
  | WeightsMongoModel;


export type StkvtWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_number?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long,
  present?: boolean;
  block_timestamp?: Date;
};
