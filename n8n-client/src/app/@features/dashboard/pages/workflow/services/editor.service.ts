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

type Schemes = GetSchemes<
  ClassicPreset.Node,
  ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>
>;
type AreaExtra = AngularArea2D<Schemes>;

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  editor!: NodeEditor<Schemes>;
  area!: AreaPlugin<Schemes, AreaExtra>;
  render!: AngularPlugin<Schemes, AreaExtra>;
  connection!: ConnectionPlugin<Schemes, AreaExtra>;
  socket!: ClassicPreset.Socket;

  contruct(container: HTMLElement, injector: Injector) {
    this.editor = new NodeEditor<Schemes>();
    this.area = new AreaPlugin<Schemes, AreaExtra>(container);
    this.connection = new ConnectionPlugin<Schemes, AreaExtra>();
    this.render = new AngularPlugin<Schemes, AreaExtra>({ injector });
    this.socket = new ClassicPreset.Socket('socket');

    this.initialize();
  }

  initialize() {
    AreaExtensions.selectableNodes(this.area, AreaExtensions.selector(), {
      accumulating: AreaExtensions.accumulateOnCtrl(),
    });

    this.editor.use(this.area);

    this.render.addPreset(Presets.classic.setup());
    this.connection.addPreset(ConnectionPresets.classic.setup());

    this.area.use(this.connection);
    this.area.use(this.render);

    AreaExtensions.simpleNodesOrder(this.area);
    AreaExtensions.zoomAt(this.area, this.editor.getNodes());

    return () => this.area.destroy();
  }

  // async createOutputNode(label: string) {
  //   const node = new ClassicPreset.Node(label);
  //   node.addOutput(label, new ClassicPreset.Output(this.socket));
  //   return node;
  // }

  // async createInputNode(label: string) {
  //   const node = new ClassicPreset.Node(label);
  //   node.addInput(label, new ClassicPreset.Input(this.socket));
  //   return node;
  // }

  // async createInputOutputNode(label: string, output: number = 1) {
  //   const node = new ClassicPreset.Node(label);

  //   for (let i = 0; i < output; i++) {
  //     node.addOutput(`${label} ${i}`, new ClassicPreset.Output(this.socket));
  //   }

  //   return node;
  // }

  async createBaseNode(nodeModel: NodeModel) {
    const node = new ClassicPreset.Node(nodeModel.name);

    if (nodeModel.id) {
      node.id = nodeModel.id;
    }

    return node;
  }

  async loadEditor(workflow: Workflow) {

    for (let node of workflow.nodes) {
      const tempNode = await this.createBaseNode(node);
      console.log(node);
      await this.addNode(tempNode);
      await this.translateNode(tempNode, node.position);
    }

    await AreaExtensions.zoomAt(this.area, this.editor.getNodes());
  }

  async addNode(node: ClassicPreset.Node) {
    await this.editor.addNode(node);
  }

  async translateNode(node: ClassicPreset.Node, position: [number, number]) {
    await this.area.translate(node.id, { x: position[0], y: position[1] });
  }


}
