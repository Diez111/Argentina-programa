import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { PiedepaginaComponent } from './componentes/piedepagina/piedepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobremiComponent,
    ExperienciaComponent,
    EstudiosComponent,
    CursosComponent,
    PiedepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
