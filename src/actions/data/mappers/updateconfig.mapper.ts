/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:58:02 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
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
      mapper: (value: ConfigItem) => new ConfigItemMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
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
      new ConfigItemMongoMapper().toEntity(new_config),
      dac_id || '',
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
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: ConfigItemMongoModel): ConfigItem {
    const { 
      time_multiplier,
      _id, 
      ...rest
    } = mongoModel;

    return ConfigItem.create(
      time_multiplier || 0,
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
      new ConfigItemRawMapper().toEntity(new_config),
      dac_id || '',
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
      time_multiplier || 0,
      undefined,
      rest
    );
  }
}

