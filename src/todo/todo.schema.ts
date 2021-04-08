import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop() task: string;
  @Prop() isCompleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
