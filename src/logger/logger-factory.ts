/* eslint-disable @typescript-eslint/no-var-requires */
import { createLogger, format } from 'winston';
import { LoggerTransport, ConfigApp } from '../config/config';
import { Logger } from './logger';
const redisTransport = require('winston-redis');
const winston = require('winston');

export function loggerFactory(
  envTransports: LoggerTransport,
  configApp: ConfigApp,
): Logger {
  const { combine, timestamp, printf } = format;

  const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  };

  const customFormat = printf(({ timestamp, level, message }) => {
    return `${timestamp} | ${level}: ${message}`;
  });

  const transports =
    configApp.environment !== 'dev'
      ? new redisTransport({
          hots: envTransports.host,
          port: envTransports.port,
          container: envTransports.container,
          meta: {
            name: envTransports.name,
          },
        })
      : null;

  const Logger = createLogger({
    levels: levels,
    transports: transports,
  });

  if (process.env.WINSTON_CONSOLE_LOG === 'true') {
    Logger.add(
      new winston.transports.Console({
        format: combine(
          format.colorize(),
          format.splat(),
          format.simple(),
          timestamp(),
          customFormat,
        ),
      }),
    );
  }

  return Logger;
}
