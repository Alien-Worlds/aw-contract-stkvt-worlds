/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 11 Jul 2023 12:06:28 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/api-core';

import { 
  ConfigRawModel,
  WeightsRawModel,
} from '../deltas/data/dtos';

export abstract class StkvtWorldsContractService extends SmartContractService {
  public static Token = 'STKVT_WORLDS_CONTRACT_SERVICE';

  public abstract fetchConfig(
    options?: GetTableRowsOptions
  ): Promise<Result<ConfigRawModel[], Error>>;
  public abstract fetchWeights(
    options?: GetTableRowsOptions
  ): Promise<Result<WeightsRawModel[], Error>>;
}
