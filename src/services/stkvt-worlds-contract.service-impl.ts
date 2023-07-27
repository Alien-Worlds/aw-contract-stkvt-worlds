/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:27:33 GMT
 */

import { 
  ConfigRawModel,
  WeightsRawModel,
} from '../deltas/data/dtos';
import { 
  AntelopeRpcSourceImpl,
  AntelopeSmartContractServiceImpl,
} from '@alien-worlds/aw-antelope';

import { StkvtWorldsContractService } from './stkvt-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/aw-core';

/**
 * A service class for interacting with the stkvt.worlds smart contract.
 * 
 * @class StkvtWorldsContractServiceImpl
 * @extends {AntelopeSmartContractServiceImpl}
 * @implements { StkvtWorldsContractService}
*/
export class StkvtWorldsContractServiceImpl
  extends AntelopeSmartContractServiceImpl
  implements StkvtWorldsContractService 
{
  /**
   * Creates an instance of StkvtWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {AntelopeRpcSourceImpl} antelopeRpcSourceImpl - The Antelope RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(antelopeRpcSourceImpl: AntelopeRpcSourceImpl, serviceUrl: string) {
    super(antelopeRpcSourceImpl, serviceUrl, 'stkvt.worlds');
  }

  /**
   * An AntelopeSmartContractServiceImpl for the config table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchConfig (
    options?: GetTableRowsOptions
  ): Promise<Result<ConfigRawModel[], Error>> {
    const table_key = '';
    const tableRowOptions = {
      ...options,
      code: 'stkvt.worlds',
      table: 'config',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<ConfigRawModel>(tableRowOptions)
      : await this.getAll<ConfigRawModel>(table_key, tableRowOptions);
  }
  /**
   * An AntelopeSmartContractServiceImpl for the weights table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchWeights (
    options?: GetTableRowsOptions
  ): Promise<Result<WeightsRawModel[], Error>> {
    const table_key = 'voter';
    const tableRowOptions = {
      ...options,
      code: 'stkvt.worlds',
      table: 'weights',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<WeightsRawModel>(tableRowOptions)
      : await this.getAll<WeightsRawModel>(table_key, tableRowOptions);
  }
}
