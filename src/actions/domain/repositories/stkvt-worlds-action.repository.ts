/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:20:55 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/stkvt-worlds-action.dto';
import { DataEntityType } from '../../domain/entities/stkvt-worlds-action';

/**
 * @description This abstract class represents a repository for `stkvt.worlds` contract actions.
 */
@injectable()
export abstract class StkvtWorldsActionRepository extends Repository<
  ContractAction<DataEntityType, DataDocumentType>,
  ContractActionModel
> {
  public static Token = 'STKVT_WORLDS_ACTION_REPOSITORY';
}
