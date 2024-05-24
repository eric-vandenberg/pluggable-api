import { PlatformProvider } from '../../providers/platform/platform.provider';

export abstract class PlatformContainer {
  abstract platforms: string[];
  abstract init: () => Promise<void>;
  abstract register: (key: string, instance: any) => void;
  abstract resolve: (key: string) => PlatformProvider;
}
