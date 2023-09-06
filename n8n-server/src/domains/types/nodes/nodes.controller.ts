import { Controller, Get, Query } from '@nestjs/common';
import { NodesService } from './nodes.service';
import { NodeGroup } from './models/node.model';

@Controller('nodes')
export class NodesController {
  constructor(private nodesService: NodesService) {}

  @Get('name')
  async getNodes(@Query('q') name: string): Promise<any> {
    return await this.nodesService.getNodes(name);
  }

  @Get('sockets')
  async getNodeSockets(@Query('q') type: string): Promise<any> {
    return await this.nodesService.getNodeSockets(type);
  }

  @Get('properties')
  async getNodeProperties(@Query('q') type: string): Promise<any> {
    return await this.nodesService.getNodeProperties(type);
  }

  @Get('group')
  async getNodesListByGroup(
    @Query('q') group: NodeGroup,
    @Query('only-name') onlyName: boolean,
  ): Promise<any> {
    return await this.nodesService.getNodeListByGroup(group, onlyName);
  }

  @Get('information')
  async getNodeInfomation(@Query('q') type: string): Promise<any> {
    return await this.nodesService.getNodeInfomation(type);
  }
}
