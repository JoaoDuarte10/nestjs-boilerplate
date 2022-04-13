import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigTypes, LoggerTransport, ConfigApp } from '../config/config';
import { configGetter } from '../config/config-getter';

export const configProviders: Provider[] = [
  {
    provide: LoggerTransport,
    useFactory: configGetter(ConfigTypes.logger),
    inject: [ConfigService],
  },
  {
    provide: ConfigApp,
    useFactory: configGetter(ConfigTypes.configApp),
    inject: [ConfigService],
  },
];
