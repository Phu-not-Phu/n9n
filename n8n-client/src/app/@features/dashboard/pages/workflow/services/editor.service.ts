import { Injectable, Injector } from '@angular/core';

import { NodeEditor, GetSchemes, ClassicPreset } from 'rete';
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin';
import {
  ConnectionPlugin,
  Presets as ConnectionPresets,
} from 'rete-connection-plugin';
import { AngularPlugin, Presets, AngularArea2D } from 'rete-angular-plugin/16';
import { NodeModel } from '../models/node.model';
import { Workflow } from '../models/workflow.model';
import { CoreServerService } from './core-server.service';
import { lastValueFrom } from 'rxjs';

import { CustomNodeComponent } from '../components/custom-node/custom-node.component';
import { CustomConnectionComponent } from '../components/custom-connection/custom-connection.component';
import { CustomSocketComponent } from '../components/custom-socket/custom-socket.component';

type Schemes = GetSchemes<
  ClassicPreset.Node,
  ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>
>;
type AreaExtra = AngularArea2D<Schemes>;

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  constructor(private coreServerService: CoreServerService) { }

  editor!: NodeEditor<Schemes>;
  area!: AreaPlugin<Schemes, AreaExtra>;
  render!: AngularPlugin<Schemes, AreaExtra>;
  connection!: ConnectionPlugin<Schemes, AreaExtra>;

  socketInput!: ClassicPreset.Socket;
  socketOutput!: ClassicPreset.Socket;

  contruct(container: HTMLElement, injector: Injector) {
    this.editor = new NodeEditor<Schemes>();
    this.area = new AreaPlugin<Schemes, AreaExtra>(container);
    this.connection = new ConnectionPlugin<Schemes, AreaExtra>();
    this.render = new AngularPlugin<Schemes, AreaExtra>({ injector });

    this.socketInput = new ClassicPreset.Socket('sInput');
    this.socketOutput = new ClassicPreset.Socket('sOutput');

    this.initialize();
  }

  initialize() {
    AreaExtensions.selectableNodes(this.area, AreaExtensions.selector(), {
      accumulating: AreaExtensions.accumulateOnCtrl(),
    });

    AreaExtensions.snapGrid(this.area, { size: 1 });

    this.editor.use(this.area);

    this.render.addPreset(
      Presets.classic.setup({
        customize: {
          node() {
            return CustomNodeComponent;
          },
          connection() {
            return CustomConnectionComponent;
          },
          socket() {
            return CustomSocketComponent;
          },
        },
      })
    );

    //this.render.addPreset(Presets.classic.setup());
    this.connection.addPreset(ConnectionPresets.classic.setup());

    this.area.use(this.connection);
    this.area.use(this.render);

    AreaExtensions.simpleNodesOrder(this.area);
    AreaExtensions.zoomAt(this.area, this.editor.getNodes());

    return () => this.area.destroy();
  }

  async createBaseNode(nodeModel: NodeModel) {
    const node = new ClassicPreset.Node(nodeModel.name);

    if (nodeModel.id) {
      node.id = nodeModel.id;
    }

    return node;
  }

  async createNode(nodeModel: NodeModel) {
    const node = await this.createBaseNode(nodeModel);
    const { inputs, outputs } = await lastValueFrom(
      this.coreServerService.getNodeTypes(nodeModel.type)
    );

    if (inputs) {
      inputs.forEach((input, index) => {
        node.addInput(
          `${input} ${index}`,
          new ClassicPreset.Input(this.socketInput)
        );
      });
    }

    if (outputs) {
      outputs.forEach((output, index) => {
        node.addOutput(
          `${output} ${index}`,
          new ClassicPreset.Output(this.socketOutput)
        );
      });
    }

    return node;
  }

  async addNode(node: ClassicPreset.Node) {
    await this.editor.addNode(node);
  }

  async translateNode(node: ClassicPreset.Node, position: [number, number]) {
    await this.area.translate(node.id, { x: position[0], y: position[1] });
  }

  async connectNodes(workflow: Workflow) {
    const nodes = this.editor.getNodes();
    const connections = workflow.connections;

    for (let [key, targeNodes] of Object.entries(connections)) {
      const sourceNode = nodes.find((node) => node.label === key);

      for (let [index, element] of targeNodes.main.entries()) {
        const targetNode = nodes.find((node) => node.label === element[0].node);
        await this.editor.addConnection(
          new ClassicPreset.Connection(
            sourceNode!,
            `main ${index}`,
            targetNode!,
            `main ${element[0].index}`
          )
        );
      }
    }
  }

  async loadEditor(workflow: Workflow) {
    for (let node of workflow.nodes) {
      const tempNode = await this.createNode(node);
      await this.addNode(tempNode);
      await this.translateNode(tempNode, node.position);
    }

    this.connectNodes(workflow);

    await AreaExtensions.zoomAt(this.area, this.editor.getNodes());
  }
}
