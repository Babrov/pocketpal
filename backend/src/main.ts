import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: add config service
  const port = process.env.PORT || 3000;

  app.enableVersioning({ type: VersioningType.URI });

  await app.listen(port);

  // TODO: add logger
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();