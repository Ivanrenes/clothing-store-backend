import { Inject, Injectable } from '@nestjs/common';
import { CHILD_REPOSITORY } from 'src/core/constants';
import { CreateChildDto } from './dto/create-child.dto';
import { Child } from './entities/child.entity';

@Injectable()
export class ChildrenService {
  constructor(
    @Inject(CHILD_REPOSITORY) private readonly childRepository: typeof Child,
  ) {}
  async create(childDto: CreateChildDto): Promise<Child> {
    return await this.childRepository.create<Child>(childDto);
  }

  async findAll(): Promise<Child[]> {
    return await this.childRepository.findAll<Child>();
  }

  async findByParent(parentId: string): Promise<Child[]> {
    return await this.childRepository.findAll<Child>({ where: { parentId } });
  }

  async findOneById(id: string): Promise<Child> {
    return await this.childRepository.findOne<Child>({ where: { id } });
  }
}
