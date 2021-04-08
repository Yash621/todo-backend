import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

import { TodoService } from './todo.service';
import { TodoInput } from './dto/todo-input.dto';
import { Todo } from './entities/todo.entity';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly _todoService: TodoService) {}

  @Query(() => String)
  sayHelloToBugs() {
    return 'this aint a bug its a feature';
  }

  @Mutation(() => Todo)
  createTodo(@Args('TodoInput') payload: TodoInput) {
    this._todoService.create(payload);
  }
}
