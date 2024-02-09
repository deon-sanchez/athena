import { NestFactory } from '@nestjs/core';
import { UsersAppModule } from './app.module';

const USERS_PORT = process.env.USERS_PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(UsersAppModule);
  app.enableCors();
  await app.listen(USERS_PORT);

  console.log(
    `Application is running on: http://localhost:${USERS_PORT}/graphql`,
  );
}
bootstrap();
