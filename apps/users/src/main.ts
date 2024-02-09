import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';

const PORT = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  app.enableCors();
  await app.listen(PORT);

  console.log(`Application is running on: http://localhost:${PORT}/graphql`);
}
bootstrap();
