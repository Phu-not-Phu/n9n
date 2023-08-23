import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NodeType } from './schemas/node-type.schema';
import { Model } from 'mongoose';
import { NodeGroup } from './models/node.model';

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

    async getNodeListByGroup(group: NodeGroup, onlyName?: boolean): Promise<any> {
        let query: any[] = [
            {
                $match: {
                    group: group
                },
            }
        ]

        if (onlyName) {
            query.push({
                $project: {
                    name: 1,
                    iconUrl: 1,
                    _id: 0
                }
            })
        }

        const result = await this.projectModel.aggregate(query).exec();

        return result;
    }

    async getNodeProperties(type: string): Promise<any> {
        const result = await this.projectModel.findOne({
            name: type
        }, {
            properties: 1,
            _id: 0
        }).exec();

        return result !== null ? result['properties'] : [];
    }

    async getNodeType(type: string): Promise<any> {
        const result = await this.projectModel.find({
            name: type
        }, {
            _id: 0,
            inputs: 1,
            outputs: 1,
        }).exec();

        return result !== null ? result[0] : {};
    }

}
