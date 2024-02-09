import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import Stripe from 'stripe';
import { StripeResponse } from '../../entities/stripe.entity';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;

  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {
    this.stripe = new Stripe(configService.get('STRIPE_API_KEY'), {
      apiVersion: '2023-10-16',
    });
  }

  async createCustomer(email: string): Promise<StripeResponse> {
    const customer = await this.stripe.customers.create({ email });

    if (!customer) {
      throw new Error('Failed to create customer');
    }

    const stripeId = { stripe_id: customer.id };

    // TODO: Save stripeId to user

    return stripeId;
  }

  async deleteCustomer(stripe_id: string): Promise<StripeResponse> {
    const customer = await this.stripe.customers.del(stripe_id);

    if (!customer) {
      throw new Error('Failed to delete customer');
    }

    return { stripe_id };
  }
}
