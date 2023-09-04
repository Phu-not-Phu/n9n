import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NodeTypeDocument = HydratedDocument<NodeType>;

@Schema()
export class NodeType {
    @Prop()
    _id?: string;

    @Prop({ text: true })
    name: string;

    @Prop({ text: true })
    displayName: string;

    @Prop()
    group: Array<string>;

    @Prop()
    version: number;

    @Prop()
    description: string;

    @Prop()
    defaults: Array<string>;

    @Prop()
    input: Array<string>;

    @Prop()
    output: Array<string>;

    @Prop()
    credentials: string;

    @Prop()
    properties: Array<string>;

    @Prop({ type: Object })
    codex: {}

    @Prop()
    iconUrl: string;
}

export const NodeTypeSchema = SchemaFactory.createForClass(NodeType);
