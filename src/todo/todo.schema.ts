import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop() task: string;
  @Prop() isCompleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
