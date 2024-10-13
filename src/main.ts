// lib
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyHelmet from '@fastify/helmet';
import fastifyCompress from '@fastify/compress';

// app module
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // adding middlewares
  // await app.register(fastifyCompress, { global: true }); // compression
  // await app.register(fastifyHelmet, { global: true }); // security

  await app.listen(process.env.PORT);
}

bootstrap();
