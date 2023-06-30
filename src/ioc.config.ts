/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 30 Jun 2023 10:14:22 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/api-core';
import { MongoConfig, MongoSource } from '@alien-worlds/storage-mongodb';

import { StkvtWorldsActionMongoMapper } from './actions/data/mappers';
import { StkvtWorldsActionMongoSource } from './actions/data/data-sources';
import { StkvtWorldsActionRepository } from './actions/domain/repositories';
import { StkvtWorldsContractService } from "./services/stkvt-worlds-contract.service";
import { StkvtWorldsContractServiceImpl } from "./services/stkvt-worlds-contract.service-impl";
import { StkvtWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { StkvtWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { StkvtWorldsDeltaRepository } from './deltas/domain/repositories';
import { EosRpcSourceImpl } from '@alien-worlds/eos';

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
  const repository = new RepositoryImpl(
    new StkvtWorldsActionMongoSource(mongoSource),
    new StkvtWorldsActionMongoMapper(),
    null
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
  const repository = new RepositoryImpl(
    new StkvtWorldsDeltaMongoSource(mongoSource),
    new StkvtWorldsDeltaMongoMapper(),
    null
  );

  if (container) {
    container
      .bind<StkvtWorldsDeltaRepository>(StkvtWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupStkvtWorldsContractService = (
  eosRpcSourceImpl: EosRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): StkvtWorldsContractService => {
  const service = new StkvtWorldsContractServiceImpl(
    eosRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<StkvtWorldsContractService>(StkvtWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
