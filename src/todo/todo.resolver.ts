import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { IdsInput, TodoInput, UpdateTodoInput } from './dto/todo-input.dto';
import { Todo, TodoDelete } from './entities/todo.entity';


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
  findOne(@Args('id') id: string) {
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

  @Mutation(() => Todo)
  delete(@Args('id') id: string) {
    return this._todoService.deleteOne(id);
  }

  @Mutation(() => Number)
  deleteAll() {
    return this._todoService.deleteAll();
  }

  @Mutation(() => Number)
  deleteMany(@Args('IdsInput') payload: IdsInput) {
    return this._todoService.deleteManybyIds(payload);
  }
}
