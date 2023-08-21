import { Controller, Get, Query } from '@nestjs/common';
import { NodesService } from './nodes.service';

@Controller('nodes')
export class NodesController {

    constructor(private nodesService: NodesService) { }

    @Get('')
    async getNodes(@Query('name') name: string): Promise<any> {
        return await this.nodesService.getNodes(name);
    }

    @Get('type')
    async getNode(@Query('type') type: string): Promise<any> {
        return await this.nodesService.getNode(type);
    }

}
