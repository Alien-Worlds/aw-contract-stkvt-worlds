/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 07:39:00 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Weights  } from "../../domain/entities";
import { WeightsMongoModel, WeightsRawModel  } from "../dtos/weights.dto";

// Mongo Mappers
export class WeightsMongoMapper
  extends MapperImpl<Weights, WeightsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('voter', { 
      key: 'voter', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('weight', { 
      key: 'weight', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('weightQuorum', { 
      key: 'weight_quorum', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

  }

  public toEntity(mongoModel: WeightsMongoModel): Weights {
    const { 
      voter,
      weight,
      weight_quorum,
      _id, 
      ...rest
    } = mongoModel;

    return Weights.create(
        voter ?? '',
        weight.toBigInt() ?? 0n,
        weight_quorum.toBigInt() ?? 0n,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class WeightsRawMapper
  extends MapperImpl<Weights, WeightsRawModel>
{
  public fromEntity(entity: Weights): WeightsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: WeightsRawModel): Weights {
    const { 
      voter,
      weight,
      weight_quorum,
      ...rest
    } = rawModel;

    return Weights.create(
        voter ?? '',
      parseToBigInt(weight ?? 0n),
      parseToBigInt(weight_quorum ?? 0n),
      undefined,
      rest
    );
  }
}

