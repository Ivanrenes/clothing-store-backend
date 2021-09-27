import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateChildDto {
  @IsNotEmpty()
  name: string;

  @IsUUID(4)
  @IsNotEmpty()
  parentId: string;
}
