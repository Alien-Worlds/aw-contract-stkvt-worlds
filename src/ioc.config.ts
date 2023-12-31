/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:27:33 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/aw-core';
import { 
  MongoConfig,
  MongoQueryBuilders, 
  MongoSource,
} from '@alien-worlds/aw-storage-mongodb';

import { StkvtWorldsActionMongoMapper } from './actions/data/mappers';
import { StkvtWorldsActionMongoSource } from './actions/data/data-sources';
import { StkvtWorldsActionRepository } from './actions/domain/repositories';
import { StkvtWorldsContractService } from "./services/stkvt-worlds-contract.service";
import { StkvtWorldsContractServiceImpl } from "./services/stkvt-worlds-contract.service-impl";
import { StkvtWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { StkvtWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { StkvtWorldsDeltaRepository } from './deltas/domain/repositories';
import { AntelopeRpcSourceImpl } from '@alien-worlds/aw-antelope';

export const setupStkvtWorldsActionRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<StkvtWorldsActionRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new StkvtWorldsActionMongoMapper();
  
  const repository = new RepositoryImpl(
    new StkvtWorldsActionMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<StkvtWorldsActionRepository>(StkvtWorldsActionRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupStkvtWorldsDeltaRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<StkvtWorldsDeltaRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new StkvtWorldsDeltaMongoMapper();
  
  const repository = new RepositoryImpl(
    new StkvtWorldsDeltaMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<StkvtWorldsDeltaRepository>(StkvtWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupStkvtWorldsContractService = (
  antelopeRpcSourceImpl: AntelopeRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): StkvtWorldsContractService => {
  const service = new StkvtWorldsContractServiceImpl(
    antelopeRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<StkvtWorldsContractService>(StkvtWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
