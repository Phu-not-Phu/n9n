import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchNodesComponent } from './search-nodes/search-nodes.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, SearchNodesComponent],
  imports: [CommonModule, ComponentModule, SharedModule],
  exports: [NavbarComponent, SearchNodesComponent],
})
export class ContainerModule {}
