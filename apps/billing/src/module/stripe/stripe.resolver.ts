import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { StripeService } from './stripe.service';
import { StripeResponse } from '../../entities/stripe.entity';

@Resolver()
export class StripeResolver {
  constructor(private readonly stripeService: StripeService) {}

  @Mutation(() => StripeResponse)
  async createCustomer(@Args('email') email: string): Promise<StripeResponse> {
    return await this.stripeService.createCustomer(email);
  }

  @Mutation(() => StripeResponse)
  async deleteCustomer(
    @Args('stripe_id') stripe_id: string,
  ): Promise<StripeResponse> {
    return await this.stripeService.deleteCustomer(stripe_id);
  }
}
