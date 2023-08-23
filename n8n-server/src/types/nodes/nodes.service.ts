import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NodeType } from './schemas/node-type.schema';
import { Model } from 'mongoose';

@Injectable()
export class NodesService {
    constructor(@InjectModel(NodeType.name) private projectModel: Model<NodeType>) { }

    async getNodes(name: string): Promise<any> {
        const result = await this.projectModel.aggregate([
            {
                $match: {
                    $text: {
                        $search: name
                    }
                }
            },

        ]).exec();

        return result;
    }

    async getNode(type: string): Promise<any> {
        const result = await this.projectModel.find({
            name: type
        }).exec();

        return result;
    }

}
