import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  uid: string;

  @Prop({ required: true })
  username: string;

  @Prop({ default: 'user' + uuidv4() })
  displayName: string;

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
}

export const UserSchema = SchemaFactory.createForClass(User);
