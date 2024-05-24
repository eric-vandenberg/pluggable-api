import { PlatformContainer } from '../../application/containers/platform/platform.container';
import { ConfigRepository } from '../../application/repositories/config.repository';
import PlatformContainerImpl from '../containers/platform/platform.container-impl';
import { IGetReviewsUseCase } from '../../application/useCases/review/get-reviews.interface';
import { GetReviewsUseCase } from '../../application/useCases/review/implementations/get-reviews.usecase';
import { GetReviewsController } from '../../presentation/http/controllers/review/get-reviews.controller';
import { ConfigRepositoryImpl } from '../repositories/config.repository-impl';
import { DBClient } from '../database/db.client-impl';

export function getReviewsComposer() {
  const dbClient = new DBClient();
  const repository: ConfigRepository = new ConfigRepositoryImpl(dbClient);
  const container: PlatformContainer = PlatformContainerImpl;
  const useCase: IGetReviewsUseCase = new GetReviewsUseCase(
    repository,
    container
  );
  const controller = new GetReviewsController(useCase);

  return controller;
}
