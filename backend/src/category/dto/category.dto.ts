import type { CategoryInterface, UserInterface } from '@pocketpal/contracts';
import { BaseDto } from '../../generic/base.dto';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { UserDto } from '../../user/dto/user.dto';

@Entity('categories')
@Index(['name', 'user'], { unique: true })
export class CategoryDto extends BaseDto implements CategoryInterface {
  @Column('text', { default: '' })
  name!: string;

  @Column('text', { default: '' })
  description!: string;

  @Column('text', { default: '' })
  image!: string;

  @ManyToOne(() => UserDto, (user) => user.categories)
  @JoinColumn({ name: 'user_id' })
  user!: UserInterface;
}