import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserResponse } from '../../entities/user.entity';
import { UserInput } from '../../dto/create-user.input';

@Resolver((of) => UserResponse)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query((returns) => [UserResponse])
  getUsers(): Promise<UserResponse[]> {
    return this.userService.getAllUsers();
  }

  @Query((returns) => UserResponse)
  async getUser(@Args('email') email: string): Promise<UserResponse> {
    return this.userService.getUserByEmail(email);
  }

  @Mutation((returns) => UserResponse)
  async createUser(@Args('input') input: UserInput): Promise<UserResponse> {
    return this.userService.createUser(input);
  }

  @Mutation((returns) => UserResponse)
  async deleteUser(@Args('email') email: string): Promise<UserResponse> {
    return this.userService.deleteUserByEmail(email);
  }
}
