import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WorkflowDocument = HydratedDocument<Workflow>;

@Schema()
export class Workflow {
  @Prop()
  id: string;

  @Prop()
  content: string;

  @Prop()
  createAt: Date;

  @Prop()
  updateAt: Date;

  @Prop()
  isDeleted: boolean;
}

export const WorkflowSchema = SchemaFactory.createForClass(Workflow);
