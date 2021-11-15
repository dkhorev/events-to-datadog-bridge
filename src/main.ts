import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { fastifyHelmet } from 'fastify-helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true, bodyLimit: 10000 }),
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.register(fastifyHelmet);

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}

bootstrap();
