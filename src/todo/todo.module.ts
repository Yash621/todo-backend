import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TODO } from 'src/constants';
import { TodoResolver } from './todo.resolver';
import { TodoSchema } from './todo.schema';
import { TodoService } from './todo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TODO,
        schema: TodoSchema,
      },
    ]),
  ],
  providers: [TodoResolver, TodoService],
  exports: [TodoService],
})
export class TodoModule {}
