import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { TodoInput, UpdateTodoInput } from './dto/todo-input.dto';
import { Todo } from './entities/todo.entity';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly _todoService: TodoService) {}

  /* -------------------------------------------------------------------------- */
  /*                                    QUERY                                   */
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- READ ---------------------------------- */

  @Query(() => Todo)
  findAll() {
    return this._todoService.findAll();
  }
  @Query(() => Todo)
  findOne(id: string) {
    return this._todoService.findOneById(id);
  }
  /* -------------------------------------------------------------------------- */
  /*                                  MUTATION                                  */
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- CREATE --------------------------------- */

  @Mutation(() => Todo)
  createTodo(@Args('TodoInput') payload: TodoInput) {
    return this._todoService.create(payload);
  }
  /* --------------------------------- UPDATE --------------------------------- */

  @Mutation(() => [Todo])
  updateOne(@Args('UpdateTodoInput') payload: UpdateTodoInput) {
    return this._todoService.updateOne(payload);
  }
  /* --------------------------------- DELETE --------------------------------- */

  @Mutation(() => [Todo])
  delete(id: string) {
    return this._todoService.deleteOne(id);
  }

  @Mutation(() => [Todo])
  deleteAll() {
    return this._todoService.deleteAll();
  }

  @Mutation(() => [Todo])
  deleteMany(ids: Array<string>) {
    return this._todoService.deleteMany(ids);
  }
}
