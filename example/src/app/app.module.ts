import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioPostComponent } from './components/first-box/formulario-post.component';
import { SegundoFormularioComponent } from './components/second-box/segundo-formulario.component';
import { TercerFormularioComponent } from './components/third-box/tercer-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPostComponent,
    SegundoFormularioComponent,
    TercerFormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
