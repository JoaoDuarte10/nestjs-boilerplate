import { ConfigService } from '@nestjs/config';
import { ConfigTypes } from '../config/config';

export function configGetter(configType: ConfigTypes) {
  return (config: ConfigService) => config.get(configType);
}
