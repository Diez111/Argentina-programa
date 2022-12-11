import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenusuperiorComponent } from './componentes/menusuperior/menusuperior.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { InfocontactoComponent } from './componentes/infocontacto/infocontacto.component';
import { CursosComponent } from './componentes/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenusuperiorComponent,
    SobremiComponent,
    TecnologiasComponent,
    HabilidadesComponent,
    EstudiosComponent,
    ExperienciaComponent,
    InfocontactoComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
