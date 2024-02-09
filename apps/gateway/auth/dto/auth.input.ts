import { InputType, Field } from '@nestjs/graphql';

@InputType({ description: 'Login Input' })
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
