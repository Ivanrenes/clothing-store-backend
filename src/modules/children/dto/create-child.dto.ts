import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateChildDto {
  @IsNotEmpty()
  name: string;

  parentId: string;
}
