import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MiPComponent } from './components/mi-p/mi-p.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { FootersComponent } from './footers/footers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MiPComponent,
    MainWrapperComponent,
    FootersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
