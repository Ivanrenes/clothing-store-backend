import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(username: string, password: string): Promise<any> {
    Logger.log('user');
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Correo y/o contraseña no válido(s)');
    }
    return user;
  }
}
