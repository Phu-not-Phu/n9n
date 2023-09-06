import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type WorkflowDocument = HydratedDocument<Workflow>;

@Schema()
export class Workflow {
  @Prop()
  id: string;

  @Prop()
  coreID: string;

  @Prop()
  name: string;

  @Prop()
  createAt: string;

  @Prop()
  updateAt: string;

  @Prop()
  tags: Array<string>;

  @Prop({ type: Types.ObjectId })
  projectID: Types.ObjectId;
}



export const WorkflowSchema = SchemaFactory.createForClass(Workflow)
  .index({ projectID: 1, name: 1 }, { unique: true })
