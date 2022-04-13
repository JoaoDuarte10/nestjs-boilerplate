import { Provider } from '@nestjs/common';
import { Logger } from 'src/logger/logger';
import { loggerFactory } from 'src/logger/logger-factory';
import { LoggerTransport, ConfigApp } from '../config/config';

export const libProvider: Provider[] = [
  {
    provide: Logger,
    useFactory: loggerFactory,
    inject: [LoggerTransport, ConfigApp],
  },
];
