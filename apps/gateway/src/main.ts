import { NestFactory } from '@nestjs/core';
import { GatewayAppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayAppModule);
  await app.listen(3000);
}
bootstrap();
