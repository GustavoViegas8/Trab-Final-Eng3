import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Collaborator extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  key: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;

  @Column({nullable: true})
  deletedAt: Date
}
