import {
  Column,
  Model,
  Table,
  IsUUID,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { User } from 'src/modules/users/entities/user.entity';

@Table
export class Parent extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({ defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({
    allowNull: false,
  })
  description: string;

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column({
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
