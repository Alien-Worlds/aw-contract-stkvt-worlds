/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:57:31 GMT
 */

import { 
  ConfigRawModel,
  WeightsRawModel,
} from '../deltas/data/dtos';
import { 
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

import { StkvtWorldsContractService } from './stkvt-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';

/**
 * A service class for interacting with the stkvt.worlds smart contract.
 * 
 * @class StkvtWorldsContractServiceImpl
 * @extends {EosSmartContractServiceImpl}
 * @implements { StkvtWorldsContractService}
*/
export class StkvtWorldsContractServiceImpl
  extends EosSmartContractServiceImpl
  implements StkvtWorldsContractService 
{
  /**
   * Creates an instance of StkvtWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {EosRpcSourceImpl} eosRpcSourceImpl - The EOS RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(eosRpcSourceImpl: EosRpcSourceImpl, serviceUrl: string) {
    super(eosRpcSourceImpl, serviceUrl, 'stkvt.worlds');
  }

  /**
   * A EosSmartContractServiceImpl for the config table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchConfig (
    options?: GetTableRowsOptions
  ): Promise<Result<ConfigRawModel[], Error>> {
    const table_key = 'time_multiplier';
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
   * A EosSmartContractServiceImpl for the weights table.
   * 
   * @type {EosSmartContractServiceImpl}
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
