import { Module } from '@nestjs/common';

import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResponse, UserSchema } from '../../entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { schema: UserSchema, name: UserResponse.name },
    ]),
  ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
