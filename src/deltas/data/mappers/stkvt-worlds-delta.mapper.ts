/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 11 Jul 2023 12:06:28 GMT
 */


import { 
  Config,
  Weights,
} from '../../domain/entities';
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/stkvt-worlds-delta';
import { StkvtWorldsDeltaMongoModel, StkvtWorldsDeltaRawModel } from '../dtos';
import { StkvtWorldsTableName } from '../../domain/enums';
import { ConfigMongoMapper, ConfigRawMapper } from "./config.mapper";
import { WeightsMongoMapper, WeightsRawMapper } from "./weights.mapper";

// Mongo Mapper
export class StkvtWorldsDeltaMongoMapper
  extends MapperImpl<ContractDelta<DataEntityType, StkvtWorldsDeltaMongoModel>, StkvtWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType, StkvtWorldsDeltaMongoModel>
  ): StkvtWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case StkvtWorldsTableName.Config:
        entityData = new ConfigMongoMapper().fromEntity(
          entity.data as Config
        );
        break;
      case StkvtWorldsTableName.Weights:
        entityData = new WeightsMongoMapper().fromEntity(
          entity.data as Weights
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
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
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}

// Processor Task Mapper
export class StkvtWorldsDeltaProcessorTaskMapper extends MapperImpl<
  ContractDelta<DataEntityType, StkvtWorldsDeltaRawModel>, 
    StkvtWorldsDeltaRawModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType, StkvtWorldsDeltaRawModel>
  ): StkvtWorldsDeltaRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: StkvtWorldsDeltaRawModel
  ): ContractDelta<DataEntityType, StkvtWorldsDeltaRawModel> {
    let data;
    switch (rawModel.table) {
      case StkvtWorldsTableName.Config:
        data = new ConfigRawMapper().toEntity(rawModel.data);
        break;
      case StkvtWorldsTableName.Weights:
        data = new WeightsRawMapper().toEntity(rawModel.data);
        break;
    }

    const {
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = rawModel;

    return new ContractDelta<DataEntityType, StkvtWorldsDeltaRawModel>(
      '',
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}