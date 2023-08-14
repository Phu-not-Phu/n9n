import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  id: string;

  @Prop()
  workflows: string;

  @Prop()
  createAt: Date;

  @Prop()
  updateAt: Date;

  @Prop()
  isDeleted: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
