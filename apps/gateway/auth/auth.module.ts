import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UsersService } from 'apps/users/src/users.service';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [UsersService],
})
export class AuthModule {}
