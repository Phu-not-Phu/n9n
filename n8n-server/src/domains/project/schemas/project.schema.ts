import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: new Date().toISOString() })
  createAt: string;

  @Prop({ default: new Date().toISOString() })
  updateAt: string;

  @Prop({ type: Types.ObjectId })
  ownerID: Types.ObjectId;
}

export const ProjectSchema = SchemaFactory.createForClass(Project)
  .index({ ownerID: 1, name: 1 }, { unique: true });
