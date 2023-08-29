import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop({ required: true })
  username: string;

  @Prop({ default: '' })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ default: '' })
  googleID: string;

  @Prop({ default: '' })
  githubID: string;

  @Prop({ default: new Date() })
  createAt: Date;

  @Prop({ default: new Date() })
  updateAt: Date;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
