import {
  Column,
  Model,
  Table,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  IsUUID,
} from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { Parent } from 'src/modules/parents/entities/parent.entity';

@Table
export class Child extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({ defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({
    allowNull: false,
  })
  name: string;

  @IsUUID(4)
  @ForeignKey(() => Parent)
  @Column({
    allowNull: false,
  })
  parentId: string;

  @BelongsTo(() => Parent)
  parent: Parent;
}
