/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:58:02 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Stakeobsv,  AccountStakeDelta  } from "../../domain/entities";
import { StakeobsvMongoModel, StakeobsvRawModel,  AccountStakeDeltaMongoModel, AccountStakeDeltaRawModel  } from "../dtos/stakeobsv.dto";

// Mongo Mappers
export class StakeobsvMongoMapper
  extends MapperImpl<Stakeobsv, StakeobsvMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('stakeDeltas', { 
      key: 'stake_deltas', 
      mapper: (values: AccountStakeDelta[]) => values.map(value => new AccountStakeDeltaMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: StakeobsvMongoModel): Stakeobsv {
    const { 
      stake_deltas,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Stakeobsv.create(
      stake_deltas?.map(value => new AccountStakeDeltaMongoMapper().toEntity(value)) || [],
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class AccountStakeDeltaMongoMapper
  extends MapperImpl<AccountStakeDelta, AccountStakeDeltaMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('stakeDelta', { 
      key: 'stake_delta', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('unstakeDelay', { 
      key: 'unstake_delay', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: AccountStakeDeltaMongoModel): AccountStakeDelta {
    const { 
      account,
      stake_delta,
      unstake_delay,
      _id, 
      ...rest
    } = mongoModel;

    return AccountStakeDelta.create(
      account || '',
      new AssetMongoMapper().toEntity(stake_delta),
      unstake_delay || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class StakeobsvRawMapper
  extends MapperImpl<Stakeobsv, StakeobsvRawModel>
{
  public fromEntity(entity: Stakeobsv): StakeobsvRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StakeobsvRawModel): Stakeobsv {
    const { 
      stake_deltas,
      dac_id,
      ...rest
    } = rawModel;

    return Stakeobsv.create(
      stake_deltas?.map(value => new AccountStakeDeltaRawMapper().toEntity(value)) || [],
      dac_id || '',
      undefined,
      rest
    );
  }
}

export class AccountStakeDeltaRawMapper
  extends MapperImpl<AccountStakeDelta, AccountStakeDeltaRawModel>
{
  public fromEntity(entity: AccountStakeDelta): AccountStakeDeltaRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: AccountStakeDeltaRawModel): AccountStakeDelta {
    const { 
      account,
      stake_delta,
      unstake_delay,
      ...rest
    } = rawModel;

    return AccountStakeDelta.create(
      account || '',
      new AssetRawMapper().toEntity(stake_delta),
      unstake_delay || 0,
      undefined,
      rest
    );
  }
}

