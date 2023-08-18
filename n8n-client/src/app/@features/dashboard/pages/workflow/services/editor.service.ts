import { ElementRef, Injectable, Injector } from '@angular/core';

import { NodeEditor, GetSchemes, ClassicPreset } from 'rete';
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin';
import {
  ConnectionPlugin,
  Presets as ConnectionPresets,
} from 'rete-connection-plugin';
import { AngularPlugin, Presets, AngularArea2D } from 'rete-angular-plugin/16';

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

  async testAdd2Nodes() {
    // const a = new ClassicPreset.Node('A');
    // a.addControl(
    //   'a',
    //   new ClassicPreset.InputControl('text', { initial: 'hello' })
    // );
    // a.addOutput('a', new ClassicPreset.Output(this.socket));
    // await this.editor.addNode(a);

    // const b = new ClassicPreset.Node('B');
    // b.addControl(
    //   'b',
    //   new ClassicPreset.InputControl('text', { initial: 'hello' })
    // );
    // b.addInput('b', new ClassicPreset.Input(this.socket));

    const a = await this.createInputNode('A');
    const b = await this.createOutputNode('B');

    await this.editor.addNode(a);
    await this.editor.addNode(b);
  }

  async createNode(name: string) {
    const node = new ClassicPreset.Node(name);
    // node.addControl(
    //   name,
    //   new ClassicPreset.InputControl('text', { initial: 'hello' })
    // );
    //node.addOutput(name, new ClassicPreset.Output(this.socket));
    return node;
  }

  async createOutputNode(name: string) {
    const node = new ClassicPreset.Node(name);
    node.addOutput(name, new ClassicPreset.Output(this.socket));
    return node;
  }

  async createInputNode(name: string) {
    const node = new ClassicPreset.Node(name);
    node.addInput(name, new ClassicPreset.Input(this.socket));
    return node;
  }

  async createInputOutputNode(name: string, output: number = 1) {
    const node = new ClassicPreset.Node(name);

    for (let i = 0; i < output; i++) {
      node.addOutput(`${name} ${i}`, new ClassicPreset.Output(this.socket));
    }

    return node;
  }
}
