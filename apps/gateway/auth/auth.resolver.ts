import { Resolver, Args, Mutation, Context } from '@nestjs/graphql';
import { LoginResponse, LogoutResponse } from './entities/auth.entity';
import { LoginInput } from './dto/auth.input';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('input') input: LoginInput,
    @Context() { req, res },
  ): Promise<LoginResponse> {
    return await this.authService.login(input, req, res);
  }

  @Mutation(() => LogoutResponse)
  async logout(@Context() { req, res }): Promise<LogoutResponse> {
    return await this.authService.logout(req, res);
  }
}
