export enum ConfigTypes {
  configApp = 'configApp',
  logger = 'logger',
}

export abstract class ConfigApp {
  environment: string;
  port: string;
}

export abstract class LoggerTransport {
  host: string;
  port: string;
  container: string;
  name: string;
}

export interface Config {
  [ConfigTypes.configApp]: ConfigApp;
  [ConfigTypes.logger]: LoggerTransport;
}
