import { BaseInterface } from "@pocketpal/contracts";
import { IsUUID } from "class-validator";
import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseDto implements BaseInterface {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID('all')
  id!: string;

  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: false })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date | null;
}

