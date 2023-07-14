/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:58:27 GMT
 */


import { 
  Balanceobsv,
  Stakeobsv,
  Updateconfig,
} from '../../domain/entities';
import { 
  ContractAction, 
  MapperImpl, 
  parseToBigInt 
} from '@alien-worlds/api-core';

import { BalanceobsvMongoMapper, BalanceobsvRawMapper } from "./balanceobsv.mapper";
import { StakeobsvMongoMapper, StakeobsvRawMapper } from "./stakeobsv.mapper";
import { UpdateconfigMongoMapper, UpdateconfigRawMapper } from "./updateconfig.mapper";
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/stkvt-worlds-action';
import { 
  StkvtWorldsActionMongoModel,
  StkvtWorldsActionRawModel,
  BalanceobsvMongoModel,
  BalanceobsvRawModel,
  StakeobsvMongoModel,
  StakeobsvRawModel,
  UpdateconfigMongoModel,
  UpdateconfigRawModel,
} from '../dtos';
import { StkvtWorldsActionName } from '../../domain/enums';

// Mongo Mapper
export class StkvtWorldsActionMongoMapper
  extends MongoMapper<ContractAction<DataEntityType>, StkvtWorldsActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType>
  ): StkvtWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case StkvtWorldsActionName.Balanceobsv:
        entityData = new BalanceobsvMongoMapper().fromEntity(
          entity.data as Balanceobsv
        );
        break;
      case StkvtWorldsActionName.Stakeobsv:
        entityData = new StakeobsvMongoMapper().fromEntity(
          entity.data as Stakeobsv
        );
        break;
      case StkvtWorldsActionName.Updateconfig:
        entityData = new UpdateconfigMongoMapper().fromEntity(
          entity.data as Updateconfig
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };
  }

  public toEntity(
    mongoModel: StkvtWorldsActionMongoModel
  ): ContractAction<DataEntityType> {
    let data;
    switch (mongoModel.action.name) {
      case StkvtWorldsActionName.Balanceobsv:
        data = new BalanceobsvMongoMapper().toEntity(
          mongoModel.action.data as BalanceobsvMongoModel
        );
        break;
      case StkvtWorldsActionName.Stakeobsv:
        data = new StakeobsvMongoMapper().toEntity(
          mongoModel.action.data as StakeobsvMongoModel
        );
        break;
      case StkvtWorldsActionName.Updateconfig:
        data = new UpdateconfigMongoMapper().toEntity(
          mongoModel.action.data as UpdateconfigMongoModel
        );
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
    );
  }
}

// Processor Task Mapper
export class StkvtWorldsActionProcessorTaskMapper extends MapperImpl<
  ContractAction<DataEntityType, StkvtWorldsActionRawModel>,
  StkvtWorldsActionRawModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType, StkvtWorldsActionRawModel>
  ): StkvtWorldsActionRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: StkvtWorldsActionRawModel
  ): ContractAction<DataEntityType, StkvtWorldsActionRawModel> {
    let data;
    switch (rawModel.name) {
      case StkvtWorldsActionName.Balanceobsv:
        data = new BalanceobsvRawMapper().toEntity(
          rawModel.data as BalanceobsvRawModel
        );
        break;
      case StkvtWorldsActionName.Stakeobsv:
        data = new StakeobsvRawMapper().toEntity(
          rawModel.data as StakeobsvRawModel
        );
        break;
      case StkvtWorldsActionName.Updateconfig:
        data = new UpdateconfigRawMapper().toEntity(
          rawModel.data as UpdateconfigRawModel
        );
        break;
    }

    const {
      account,
      name,
      block_timestamp,
      block_number,
      global_sequence,
      recv_sequence,
      transaction_id,
    } = rawModel;

    return new ContractAction<DataEntityType, StkvtWorldsActionRawModel>(
      '',
      block_timestamp,
      parseToBigInt(block_number),
      account,
      name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      transaction_id,
      data
    );
  }
}
