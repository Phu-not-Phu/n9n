import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { ComponentModule } from '../components/component.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    declarations: [NavigationComponent, SettingsComponent],
    exports: [NavigationComponent, SettingsComponent],
    imports: [CommonModule, ComponentModule]
})
export class ContainerModule {}
