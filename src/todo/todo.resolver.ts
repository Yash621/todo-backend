import { Resolver, Mutation } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { TodoInput } from './dto/todo-input.dto';
import { Todo } from './entities/todo.entity';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => Todo)
  createTodo(TodoInput: TodoInput) {
    this.todoService.create(TodoInput);
  }
}
