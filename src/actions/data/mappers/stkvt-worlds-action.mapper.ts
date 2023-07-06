/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:20:55 GMT
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

import { BalanceobsvMongoMapper } from "./balanceobsv.mapper";
import { StakeobsvMongoMapper } from "./stakeobsv.mapper";
import { UpdateconfigMongoMapper } from "./updateconfig.mapper";
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/stkvt-worlds-action';
import { 
  StkvtWorldsActionMongoModel,
  BalanceobsvMongoModel,
  StakeobsvMongoModel,
  UpdateconfigMongoModel,
} from '../dtos';
import { StkvtWorldsActionName } from '../../domain/enums';

export class StkvtWorldsActionMongoMapper
  extends MapperImpl<ContractAction<DataEntityType, StkvtWorldsActionMongoModel>, StkvtWorldsActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType, StkvtWorldsActionMongoModel>
  ): StkvtWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case StkvtWorldsActionName.Balanceobsv:
        entityData = new BalanceobsvMongoMapper().fromEntity(entity.data as Balanceobsv);
        break;
      case StkvtWorldsActionName.Stakeobsv:
        entityData = new StakeobsvMongoMapper().fromEntity(entity.data as Stakeobsv);
        break;
      case StkvtWorldsActionName.Updateconfig:
        entityData = new UpdateconfigMongoMapper().fromEntity(entity.data as Updateconfig);
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action_hash: entity.actionHash,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };
  }

  public toEntity(
    mongoModel: StkvtWorldsActionMongoModel
  ): ContractAction<DataEntityType, StkvtWorldsActionMongoModel> {
    let data;
    switch (mongoModel.action.name) {
      case StkvtWorldsActionName.Balanceobsv:
        data = new BalanceobsvMongoMapper().toEntity(mongoModel.action.data as BalanceobsvMongoModel);
        break;
      case StkvtWorldsActionName.Stakeobsv:
        data = new StakeobsvMongoMapper().toEntity(mongoModel.action.data as StakeobsvMongoModel);
        break;
      case StkvtWorldsActionName.Updateconfig:
        data = new UpdateconfigMongoMapper().toEntity(mongoModel.action.data as UpdateconfigMongoModel);
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action_hash,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType, StkvtWorldsActionMongoModel>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
      action_hash
    );
  }
}
