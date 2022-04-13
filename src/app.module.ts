import { Module } from '@nestjs/common';
import { configProviders } from './providers/config-provider';
import { storageProvider } from './providers/storage-provider';
import configuration from './config/load-variables';
import { ConfigModule } from '@nestjs/config';
import { libProvider } from './providers/lib-provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [],
  providers: [...libProvider, ...storageProvider, ...configProviders],
})
export class AppModule {}
