import { NestFactory } from '@nestjs/core';
import { BillingAppModule } from './app.module';

const BILLING_PORT = process.env.BILLING_PORT || 3002;

async function bootstrap() {
  const app = await NestFactory.create(BillingAppModule);
  app.enableCors();
  await app.listen(BILLING_PORT);

  console.log(
    `Application is running on: http://localhost:${BILLING_PORT}/graphql`,
  );
}
bootstrap();
