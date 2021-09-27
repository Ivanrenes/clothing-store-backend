import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(userDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create<User>(userDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOneById(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const updatedUser = user.update(updateUserDto);
    return updatedUser;
  }

  async remove(id: string): Promise<boolean> {
    const user = await this.findOneById(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const updatedUser = user.destroy();
    return !!updatedUser;
  }
}
