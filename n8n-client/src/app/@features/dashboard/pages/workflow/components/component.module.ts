import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNodeComponent } from './custom-node/custom-node.component';
import { CustomSocketComponent } from './custom-socket/custom-socket.component';
import { CustomConnectionComponent } from './custom-connection/custom-connection.component';
import { ReteModule } from 'rete-angular-plugin/16';
import { InforComponent } from './navbar/infor/infor.component';
import { FunctionComponent } from './navbar/function/function.component';
import { AddNodeComponent } from './add-node/add-node.component';
import { SearchNodesComponent } from './search-nodes/search-nodes.component';

@NgModule({
  declarations: [
    CustomNodeComponent,
    CustomSocketComponent,
    CustomConnectionComponent,
    InforComponent,
    FunctionComponent,
    AddNodeComponent,
    SearchNodesComponent,
  ],
  imports: [CommonModule, ReteModule],
  exports: [
    CustomNodeComponent,
    CustomSocketComponent,
    CustomConnectionComponent,
    InforComponent,
    FunctionComponent,
    AddNodeComponent,
    SearchNodesComponent
  ],
})
export class ComponentModule {}
