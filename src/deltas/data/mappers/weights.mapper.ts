/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:58:02 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
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
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('weight', { 
      key: 'weight', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('weightQuorum', { 
      key: 'weight_quorum', 
      mapper: (value: number) => value,
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
      voter || '',
      weight || 0,
      weight_quorum || 0,
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
      voter || '',
      weight || 0,
      weight_quorum || 0,
      undefined,
      rest
    );
  }
}

