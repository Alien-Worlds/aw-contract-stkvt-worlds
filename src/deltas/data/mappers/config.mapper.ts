/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 30 Jun 2023 10:14:22 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Config  } from "../../domain/entities";
import { ConfigMongoModel, ConfigRawModel  } from "../dtos/config.dto";

// Mongo Mappers
export class ConfigMongoMapper
  extends MapperImpl<Config, ConfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('timeMultiplier', { 
      key: 'time_multiplier', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

  }

  public toEntity(mongoModel: ConfigMongoModel): Config {
    const { 
      time_multiplier,
      _id, 
      ...rest
    } = mongoModel;

    return Config.create(
        time_multiplier.toBigInt() ?? 0n,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ConfigRawMapper
  extends MapperImpl<Config, ConfigRawModel>
{
  public fromEntity(entity: Config): ConfigRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ConfigRawModel): Config {
    const { 
      time_multiplier,
      ...rest
    } = rawModel;

    return Config.create(
      parseToBigInt(time_multiplier ?? 0n),
      undefined,
      rest
    );
  }
}

