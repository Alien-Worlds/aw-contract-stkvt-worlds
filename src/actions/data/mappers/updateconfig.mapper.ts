/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 07:39:00 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Updateconfig,  ConfigItem  } from "../../domain/entities";
import { UpdateconfigMongoModel, UpdateconfigRawModel,  ConfigItemMongoModel, ConfigItemRawModel  } from "../dtos/updateconfig.dto";

// Mongo Mappers
export class UpdateconfigMongoMapper
  extends MapperImpl<Updateconfig, UpdateconfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('newConfig', { 
      key: 'new_config', 
      mapper:          new ConfigItemMongoMapper().fromEntity,    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: UpdateconfigMongoModel): Updateconfig {
    const { 
      new_config,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Updateconfig.create(
        new_config
          ? new ConfigItemMongoMapper().toEntity(new_config)
          : ConfigItem.getDefault(),
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class ConfigItemMongoMapper
  extends MapperImpl<ConfigItem, ConfigItemMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('timeMultiplier', { 
      key: 'time_multiplier', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

  }

  public toEntity(mongoModel: ConfigItemMongoModel): ConfigItem {
    const { 
      time_multiplier,
      _id, 
      ...rest
    } = mongoModel;

    return ConfigItem.create(
        time_multiplier.toBigInt() ?? 0n,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UpdateconfigRawMapper
  extends MapperImpl<Updateconfig, UpdateconfigRawModel>
{
  public fromEntity(entity: Updateconfig): UpdateconfigRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UpdateconfigRawModel): Updateconfig {
    const { 
      new_config,
      dac_id,
      ...rest
    } = rawModel;

    return Updateconfig.create(
        new_config
          ? new ConfigItemRawMapper().toEntity(new_config)
          : ConfigItem.getDefault(),
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

export class ConfigItemRawMapper
  extends MapperImpl<ConfigItem, ConfigItemRawModel>
{
  public fromEntity(entity: ConfigItem): ConfigItemRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ConfigItemRawModel): ConfigItem {
    const { 
      time_multiplier,
      ...rest
    } = rawModel;

    return ConfigItem.create(
      parseToBigInt(time_multiplier ?? 0n),
      undefined,
      rest
    );
  }
}

