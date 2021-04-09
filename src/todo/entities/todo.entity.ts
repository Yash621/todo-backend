import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field({ name: 'id' })
  _id: string;

  @Field(() => String, { description: 'task of the todolist' })
  task: string;

  @Field(() => Boolean, {
    description: 'completion status of task of the todolist',
  })
  isCompleted: boolean;
}

@ObjectType()
export class TodoDelete {
  @Field(() => Number, { description: 'number of deleted' })
  task: number;
}
