import {
  Column,
  Model,
  Table,
  IsUUID,
  PrimaryKey,
  IsEmail,
} from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

@Table
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({ defaultValue: DataType.UUIDV4 })
  id: string;

  @IsEmail
  @Column
  email: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
