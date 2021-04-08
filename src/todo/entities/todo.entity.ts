import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => String, { description: 'task of the todolist' })
  task: string;
  @Field(() => Boolean, {
    description: 'completion status of task of the todolist',
  })
  isCompleted: boolean;
}
