import {
  Controller,
  Body,
  Post,
  UseGuards,
  Request,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('register')
  async signUp(@Body() user: CreateUserDto, @Body() userData: any) {
    if (user.password != userData.cpassword) {
      throw new HttpException(
        'Contraseña no coincide con verificación',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.authService.create(user);
  }
}
