import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: [String] })
  workflowsID: string[];

  @Prop()
  createAt: Date;

  @Prop()
  updateAt: Date;

  @Prop()
  isDeleted: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
