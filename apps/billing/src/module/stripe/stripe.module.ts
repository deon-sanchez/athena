import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { StripeResolver } from './stripe.resolver';
import { StripeService } from './stripe.service';
import { UsersService } from 'apps/users/src/modules/users/users.service';

@Module({
  providers: [StripeResolver, StripeService, UsersService],
  exports: [StripeService],
  imports: [ConfigModule],
})
export class StripeModule {}
