import { ResponseDTO } from '../../../../domain/dtos/response.dto';
import { ConfigRepository } from '../../../repositories/config.repository';
import { PlatformContainer } from '../../../containers/platform/platform.container';
import { IGetReviewsUseCase } from '../get-reviews.interface';

export class GetReviewsUseCase implements IGetReviewsUseCase {
  constructor(
    private readonly configRepository: ConfigRepository,
    private readonly platformContainer: PlatformContainer
  ) {}

  async execute(platform: string): Promise<ResponseDTO> {
    try {
      const exists = this.platformContainer.platforms.includes(platform);

      if (!exists) {
        throw new Error('Platform unsupported');
      }

      const config = await this.configRepository.find(platform);
      const provider = this.platformContainer.resolve(platform);
      const reviews = await provider.fetch(config.fetch_map);

      return { data: reviews, success: true };
    } catch (error: unknown) {
      return { data: { error: (error as Error).message }, success: false };
    }
  }
}
