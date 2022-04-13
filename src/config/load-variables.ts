/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({});
import { Config } from './config';
import { configMap } from './config-map';

export default function loadVariables() {
  const configEnvs = {} as Config;
  const envVars =
    process.env.NODE_ENV === 'dev'
      ? require('dotenv').config({ path: '.env' }).parsed
      : require('dotenv').config({ path: '.env.prod' }).parsed;

  configMap(configEnvs, envVars);

  return configEnvs;
}
