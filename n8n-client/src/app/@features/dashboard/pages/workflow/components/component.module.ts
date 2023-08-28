import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNodeComponent } from './custom-node/custom-node.component';
import { CustomSocketComponent } from './custom-socket/custom-socket.component';
import { CustomConnectionComponent } from './custom-connection/custom-connection.component';
import { ReteModule } from 'rete-angular-plugin/16';



@NgModule({
  declarations: [
    CustomNodeComponent,
    CustomSocketComponent,
    CustomConnectionComponent
  ],
  imports: [
    CommonModule,
    ReteModule
  ],
  exports: [
    CustomNodeComponent,
    CustomSocketComponent,
    CustomConnectionComponent
  ]
})
export class ComponentModule { }
