import { Inject, Injectable } from '@nestjs/common';
import { PARENT_REPOSITORY } from 'src/core/constants';
import { CreateParentDto } from './dto/create-parent.dto';
import { Parent } from './entities/parent.entity';

@Injectable()
export class ParentsService {
  constructor(
    @Inject(PARENT_REPOSITORY) private readonly parentRepository: typeof Parent,
  ) {}
  async create(parentDto: CreateParentDto): Promise<Parent> {
    return await this.parentRepository.create<Parent>(parentDto);
  }

  async findAll(userId: string): Promise<Parent[]> {
    return await this.parentRepository.findAll<Parent>({ where: { userId } });
  }

  async findOne(parentId: string): Promise<Parent[]> {
    return await this.parentRepository.findAll<Parent>({ where: { parentId } });
  }

  async findOneById(id: string): Promise<Parent> {
    return await this.parentRepository.findOne<Parent>({ where: { id } });
  }
}
