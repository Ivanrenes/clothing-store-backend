import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ParentsService } from './parents.service';
import { CreateParentDto } from './dto/create-parent.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('parents')
export class ParentsController {
  constructor(private readonly parentsService: ParentsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createParentDto: CreateParentDto, @Request() req: any) {
    createParentDto.userId = req.user.id;
    return this.parentsService.create(createParentDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req) {
    return this.parentsService.findAll(req.user.id);
  }
}
