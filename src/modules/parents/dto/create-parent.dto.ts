import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateParentDto {
  @IsNotEmpty()
  description: string;

  userId: string;
}
