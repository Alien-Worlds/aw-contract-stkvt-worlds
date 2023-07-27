/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:27:33 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Config  } from "../../domain/entities";
import { ConfigMongoModel, ConfigRawModel  } from "../dtos/config.dto";

// Mongo Mappers
export class ConfigMongoMapper
  extends MongoMapper<Config, ConfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('timeMultiplier', { 
      key: 'time_multiplier', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: ConfigMongoModel): Config {
    const { 
      time_multiplier,
      _id,
      ...rest
    } = mongoModel;

    return Config.create(
      time_multiplier || 0,
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
      time_multiplier || 0,
      undefined,
      rest
    );
  }
}

