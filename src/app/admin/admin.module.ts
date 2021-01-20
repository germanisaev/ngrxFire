import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

console.warn('admin module loaded');

@NgModule({
    declarations: [
        LoginComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule, 
    ],
    exports: [
        LoginComponent,
        ListComponent
    ],
    providers: [],
})
export class AdminModule { }
