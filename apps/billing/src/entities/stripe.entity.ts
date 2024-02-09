import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Stripe Response' })
export class StripeResponse {
  @Field((type) => String)
  stripe_id: string;
}
