import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoInput } from './dto/todo-input.dto';
import { TodoDocument, TodoSchema } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('TodoSchema') private readonly todoModel: Model<TodoDocument>,
  ) {}
  /* --------------------------------- CREATE --------------------------------- */
  async create(payload: TodoInput) {
    const todo = await this.todoModel.create({
      task: payload.task,
      isComplete: payload.isCompleted,
    });
    return todo.save();
  }
  async createMany(payload: Array<TodoInput>) {
    const todos = await this.todoModel.aggregate(payload);
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
  async updateOne(payload: {
    task?: string;
    id: string;
    isCompleted?: boolean;
  }) {
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
  async updateMany(
    payload: Array<{
      task?: string;
      id: string;
      isCompleted?: boolean;
    }>,
  ) {
    const todos = await this.todoModel.bulkWrite();
  }
  /* --------------------------------- DELETE --------------------------------- */
  async deleteOne() {}
  async deleteAll() {}
}
