import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCollaboratorInput {
  @Field()
  nome: string;
  
  @Field()
  cpf: string

  @Field()
  key: string

}
