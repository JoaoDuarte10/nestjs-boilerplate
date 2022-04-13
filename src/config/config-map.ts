import { Config } from './config';
import { name } from '../../package.json';

export function configMap(configuration: Config, envs): void {
  configuration.configApp = {
    environment: envs.NODE_ENV,
    port: envs.PORT,
  };
  configuration.logger = {
    host: envs.REDIS_HOST,
    port: envs.REDIS_PORT,
    container: envs.REDIS_CONTAINER || name,
    name: envs.REDIS_NAME || name,
  };
}
