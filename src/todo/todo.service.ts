import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TODO } from 'src/constants';

import { IdsInput, TodoInput, UpdateTodoInput } from './dto/todo-input.dto';

import { Todo } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(TODO) private readonly todoModel: Model<Todo>) {}
  /* --------------------------------- CREATE --------------------------------- */
  async create(payload: TodoInput) {
    console.log(payload.isCompleted);
    const todo = await this.todoModel.create({
      task: payload.task,
      isCompleted: payload.isCompleted,
    });
    const res = await todo.save();
    return res;
  }

  /* ---------------------------------- READ ---------------------------------- */
  async findOneById(id: string) {
    const todo = await this.todoModel.findById(id);
    return todo;
  }
  async findAll() {
    const todos = await this.todoModel.find();
    return todos;
  }
  async findByCompletionStatus(isCompleted: boolean) {
    const todos = await this.todoModel.find({ isCompleted });
    return todos;
  }
  /* --------------------------------- UPDATE --------------------------------- */
  async updateOne(payload: UpdateTodoInput) {
    if (payload.task) {
      const todo = await this.todoModel.updateOne(
        { id: payload.id },
        {
          task: payload.task,
          isCompleted: payload.isCompleted,
        },
      );
      return todo;
    }
    const todo = await this.todoModel.updateOne(
      { id: payload.id },
      {
        isCompleted: payload.isCompleted,
      },
    );
    return todo;
  }

  /* --------------------------------- DELETE --------------------------------- */
  async deleteOne(id: string) {
const res = await this.todoModel.findByIdAndDelete(id);
return res;

  }

  async deleteAll() {
const res = await this.todoModel.deleteMany();

return res.deletedCount;

  }

  async deleteManybyIds(ids: IdsInput) {
    const data = ids.id;
    const response = await this.todoModel.deleteMany().where('id').in(data);
    return response.deletedCount;
  }
}
