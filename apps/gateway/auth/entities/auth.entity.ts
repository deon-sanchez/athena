import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType({ description: 'Login Response' })
export class LoginResponse {
  @Field((type) => Boolean)
  @Prop({ type: Boolean, default: false })
  login: boolean;
}

@ObjectType({ description: 'Logout Response' })
export class LogoutResponse {
  @Field((type) => Boolean)
  @Prop({ type: Boolean, default: false })
  logout: boolean;
}
