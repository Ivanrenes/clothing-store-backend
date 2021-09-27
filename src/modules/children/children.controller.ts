import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
  Logger,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ParentsService } from '../parents/parents.service';
import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';

@Controller('children')
export class ChildrenController {
  constructor(
    private readonly childrenService: ChildrenService,
    private parentsService: ParentsService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createChildDto: CreateChildDto) {
    return this.childrenService.create(createChildDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.childrenService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':parentId')
  async findOne(@Param('parentId') parentId: string, @Request() req) {
    const parent = await this.parentsService.findOneById(parentId);
    if (!parent) {
      throw new HttpException(
        'Categoría padre no existe',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (parent.userId != req.user.id) {
      throw new HttpException(
        'No estas autorizado para realizar consultas sobre esta categoria padre',
        HttpStatus.BAD_REQUEST,
      );
    }
    const parentChildren = await this.childrenService.findByParent(parentId);

    return parentChildren;
  }
}
