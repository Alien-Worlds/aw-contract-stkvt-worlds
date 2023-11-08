/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:27:33 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { ConfigMongoModel, ConfigRawModel } from './config.dto';
import { WeightsMongoModel, WeightsRawModel } from './weights.dto';

export type DataDocumentType =
  | ConfigMongoModel
  | WeightsMongoModel;

export type DataRawType =
  | ConfigRawModel
  | WeightsRawModel;


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

export type StkvtWorldsDeltaRawModel = {
  block_timestamp: Date;
  block_number: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
