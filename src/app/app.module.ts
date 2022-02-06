import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ProjectModule } from './modules/project.module';
import { SharedModule } from './shared/modules/shared.module';



const modules: any = [SharedModule,ProjectModule]

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ...modules
  ],
  exports:[
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
