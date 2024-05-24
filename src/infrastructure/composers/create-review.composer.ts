import { PlatformContainer } from '../../application/containers/platform/platform.container';
import { ConfigRepository } from '../../application/repositories/config.repository';
import PlatformContainerImpl from '../containers/platform/platform.container-impl';
import { ICreateReviewUseCase } from '../../application/useCases/review/create-review.interface';
import { CreateReviewUseCase } from '../../application/useCases/review/implementations/create-review.usecase';
import { CreateReviewController } from '../../presentation/http/controllers/review/create-review.controller';
import { ConfigRepositoryImpl } from '../repositories/config.repository-impl';
import { DBClient } from '../database/db.client-impl';

export function createReviewComposer() {
  const dbClient = new DBClient();
  const repository: ConfigRepository = new ConfigRepositoryImpl(dbClient);
  const container: PlatformContainer = PlatformContainerImpl;
  const useCase: ICreateReviewUseCase = new CreateReviewUseCase(
    repository,
    container
  );
  const controller = new CreateReviewController(useCase);

  return controller;
}
