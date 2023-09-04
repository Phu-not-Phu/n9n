import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WorkflowDocument = HydratedDocument<Workflow>;

@Schema()
export class Workflow {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  active: boolean;

  @Prop()
  createAt: string;

  @Prop()
  updateAt: string;

  @Prop()
  tags: Array<string>;
}

export const WorkflowSchema = SchemaFactory.createForClass(Workflow);
