/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:03:41 GMT
 */

import { 
  ContractDelta, 
  ContractDeltaModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/stkvt-worlds-delta.dto';
import { DataEntityType } from '../../domain/entities/stkvt-worlds-delta';

/**
 * @description This abstract class represents a repository for `stkvt.worlds` contract deltas.
 */
@injectable()
export abstract class StkvtWorldsDeltaRepository extends Repository<
  ContractDelta<DataEntityType, DataDocumentType>,
  ContractDeltaModel
> {
  public static Token = 'STKVT_WORLDS_DELTA_REPOSITORY';
}
