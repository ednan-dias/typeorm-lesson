import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('class')
export default class Class {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  duration: number;

  @Column()
  exp: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
