import { ResponseDTO } from '../../../../domain/dtos/response.dto';
import { ConfigRepository } from '../../../repositories/config.repository';
import { PlatformContainer } from '../../../containers/platform/platform.container';
import { ICreateReviewUseCase } from '../create-review.interface';
import { ICreateReviewRequestDTO } from '../../../../domain/dtos/create-review.dto';

export class CreateReviewUseCase implements ICreateReviewUseCase {
  constructor(
    private readonly configRepository: ConfigRepository,
    private readonly platformContainer: PlatformContainer
  ) {}

  async execute(
    platform: string,
    payload: ICreateReviewRequestDTO
  ): Promise<ResponseDTO> {
    try {
      const exists = this.platformContainer.platforms.includes(platform);

      if (!exists) {
        throw new Error('Platform unsupported');
      }

      const config = await this.configRepository.find(platform);
      const provider = this.platformContainer.resolve(platform);
      const reviews = await provider.create(payload, config.create_map);

      return { data: reviews, success: true };
    } catch (error: unknown) {
      return { data: { error: (error as Error).message }, success: false };
    }
  }
}
