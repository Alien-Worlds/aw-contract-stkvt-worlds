/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:20:55 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Balanceobsv,  AccountBalanceDelta  } from "../../domain/entities";
import { BalanceobsvMongoModel, BalanceobsvRawModel,  AccountBalanceDeltaMongoModel, AccountBalanceDeltaRawModel  } from "../dtos/balanceobsv.dto";

// Mongo Mappers
export class BalanceobsvMongoMapper
  extends MapperImpl<Balanceobsv, BalanceobsvMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('balanceDeltas', { 
      key: 'balance_deltas', 
      mapper: (value: AccountBalanceDelta[]) => 
        value.map(new AccountBalanceDeltaMongoMapper().fromEntity),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: BalanceobsvMongoModel): Balanceobsv {
    const { 
      balance_deltas,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Balanceobsv.create(
        balance_deltas?.map(new AccountBalanceDeltaMongoMapper().toEntity) ?? []
,
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class AccountBalanceDeltaMongoMapper
  extends MapperImpl<AccountBalanceDelta, AccountBalanceDeltaMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('balanceDelta', { 
      key: 'balance_delta', 
      mapper: (value: Asset) => 
           new AssetMongoMapper().fromEntity(value)
    });

  }

  public toEntity(mongoModel: AccountBalanceDeltaMongoModel): AccountBalanceDelta {
    const { 
      account,
      balance_delta,
      _id, 
      ...rest
    } = mongoModel;

    return AccountBalanceDelta.create(
        account ?? '',
        balance_delta 
          ? new AssetMongoMapper().toEntity(balance_delta)
          : Asset.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class BalanceobsvRawMapper
  extends MapperImpl<Balanceobsv, BalanceobsvRawModel>
{
  public fromEntity(entity: Balanceobsv): BalanceobsvRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: BalanceobsvRawModel): Balanceobsv {
    const { 
      balance_deltas,
      dac_id,
      ...rest
    } = rawModel;

    return Balanceobsv.create(
        balance_deltas?.map(new AccountBalanceDeltaRawMapper().toEntity) ?? []
,
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

export class AccountBalanceDeltaRawMapper
  extends MapperImpl<AccountBalanceDelta, AccountBalanceDeltaRawModel>
{
  public fromEntity(entity: AccountBalanceDelta): AccountBalanceDeltaRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: AccountBalanceDeltaRawModel): AccountBalanceDelta {
    const { 
      account,
      balance_delta,
      ...rest
    } = rawModel;

    return AccountBalanceDelta.create(
        account ?? '',
        balance_delta 
          ? new AssetRawMapper().toEntity(balance_delta)
          : Asset.getDefault(),
      undefined,
      rest
    );
  }
}

