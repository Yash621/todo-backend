import { Field, InputType, InputType } from '@nestjs/graphql';

@InputType()
export class TodoInput {
  @Field(() => String, { description: 'task of the todolist' })
  task: string;
  @Field(() => Boolean, {
    description: 'completion status of task of the todolist',
  })
  isCompleted: boolean;
}
@InputType()
export class UpdateTodoInput extends TodoInput {
  @Field(() => String, { description: 'id of the todolist' })
  id: string;
  @Field(() => TodoInput, {
    description: 'task and completion status of the todolist',
  })
  payload: TodoInput;
}
