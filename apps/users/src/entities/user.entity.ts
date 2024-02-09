import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = UserResponse & Document;

@ObjectType({ description: 'User Response' })
@Schema()
export class UserResponse {
  @Field((type) => String)
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: string;

  @Field((type) => String)
  @Prop({ type: String, default: null })
  stripe_id: string;

  @Field((type) => String)
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @HideField()
  @Prop({ type: String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserResponse);
