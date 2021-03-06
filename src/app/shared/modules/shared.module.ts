import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MasterLayout } from '../layouts/master/master.component';
import { BlankLayout } from '../layouts/blank/blank.component';
import { CardComponent } from '../components/card/card.component';



const Modules: any = []
const Components: any = [CardComponent]
const Layouts: any = [MasterLayout,BlankLayout]

@NgModule({
    declarations: [...Components,...Layouts],
    imports: [ CommonModule,RouterModule,...Modules], 
    exports: [...Components,...Layouts],
    providers: [],
})
export class SharedModule {}