/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:20:55 GMT
 */


import { 
  Config,
  Weights,
} from '../../domain/entities';
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/stkvt-worlds-delta';
import { StkvtWorldsDeltaMongoModel } from '../dtos';
import { StkvtWorldsTableName } from '../../domain/enums';
import { ConfigMongoMapper } from "./config.mapper";
import { WeightsMongoMapper } from "./weights.mapper";

export class StkvtWorldsDeltaMongoMapper
  extends MapperImpl<ContractDelta<DataEntityType, StkvtWorldsDeltaMongoModel>, StkvtWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType, StkvtWorldsDeltaMongoModel>
  ): StkvtWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case StkvtWorldsTableName.Config:
        entityData = new ConfigMongoMapper().fromEntity(entity.delta as Config);
        break;
      case StkvtWorldsTableName.Weights:
        entityData = new WeightsMongoMapper().fromEntity(entity.delta as Weights);
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data_hash: entity.deltaHash,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };
  }

  public toEntity(
    mongoModel: StkvtWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType, StkvtWorldsDeltaMongoModel> {
    let data;
    switch (mongoModel.table) {
      case StkvtWorldsTableName.Config:
        data = new ConfigMongoMapper().toEntity(mongoModel.data);
        break;
      case StkvtWorldsTableName.Weights:
        data = new WeightsMongoMapper().toEntity(mongoModel.data);
        break;
    }

    const {
      _id,
      block_number,
      code,
      scope,
      table,
      data_hash,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType, StkvtWorldsDeltaMongoModel>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data_hash,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}