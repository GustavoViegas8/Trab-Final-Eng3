import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.entity';

@ObjectType('Collaborator')
export class CollaboratorDTO extends BaseDTO {
  @Field()
  id: string;

  @FilterableField()
  cpf: string;

  @FilterableField()
  nome: string;

  @FilterableField()
  key: string;

}
