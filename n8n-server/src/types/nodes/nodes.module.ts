import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NodeType, NodeTypeSchema } from './schemas/node-type.schema';
import { NodesController } from './nodes.controller';
import { NodesService } from './nodes.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: NodeType.name, schema: NodeTypeSchema, collection: 'nodes-types' }]),
    ],
    controllers: [
        NodesController
    ],
    providers: [
        NodesService
    ],
    exports: [
        NodesService
    ]
})
export class NodesModule { }
