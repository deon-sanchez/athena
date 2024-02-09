import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginInput } from './dto/auth.input';
import { LoginResponse, LogoutResponse } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'apps/users/src/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(input: LoginInput, req, res): Promise<LoginResponse> {
    const user = await this.usersService.getUserByEmail(input.email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user._id };
    const token = this.jwtService.sign(payload);

    if (!token) {
      throw new InternalServerErrorException('Token generation failed');
    }

    return { login: true };
  }

  async logout(req, res): Promise<LogoutResponse> {
    return { logout: true };
  }
}
