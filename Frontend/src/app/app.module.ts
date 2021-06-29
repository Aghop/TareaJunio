import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstadoPipe } from './pipes/estados/estado.pipe';
import { MedicoPipe } from './pipes/medicos/medico.pipe';
import { EspecialidadIdPipe } from './pipes/especialidad/especialidad-id.pipe';
import { IdToNamePipeEspecialidad } from './pipes/especialidad/id-to-name.pipe';
import { CountCitaPipe } from './pipes/cita/count-cita.pipe';
import { FiltroEstadoPipe } from './pipes/estados/filtro-estado.pipe';
import { CancelarCitaComponent } from './components/cancelar-cita/cancelar-cita.component';
import { ReprogramarCitaComponent } from './components/reprogramar-cita/reprogramar-cita.component';
import { FormularioCrearCuentaComponent } from './components/formulario-crear-cuenta/formulario-crear-cuenta.component';
import { ComunasByRegionPipe } from './pipes/comunas/comunas-by-region.pipe';
import { IdToNameCentroPipe } from './pipes/centrosMedicos/id-to-name-centro.pipe';
import { AgendarHoraComponent } from './components/agendar-hora/agendar-hora.component';
import { HoraYFechaComponent } from './components/hora-yfecha/hora-yfecha.component';
import { BusquedaPorComunaPipe } from './pipes/comunas/busqueda-por-comuna.pipe';
import { IdToNameComunaPipe } from './pipes/comunas/id-to-name-comuna.pipe';
import { BusquedaPorNombrePipe } from './pipes/nombres/busqueda-por-nombre.pipe';
import { BusquedaPorRegionPipe } from './pipes/region/busqueda-por-region.pipe';
import { IdToNameRegionPipe } from './pipes/region/id-to-name-region.pipe';
import { ListarPacientesComponent } from './components/listar-pacientes/listar-pacientes.component';
import { ListarEditcitasComponent } from './components/listar-editcitas/listar-editcitas.component';
import { EditarDescripcionComponent } from './components/editar-descripcion/editar-descripcion.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NegadoComponent } from './components/negado/negado.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RecuperarContraComponent } from './components/recuperar-contra/recuperar-contra.component';
import { NuevaContraComponent } from './components/nueva-contra/nueva-contra.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCitasComponent,
    EstadoPipe,
    MedicoPipe,
    EspecialidadIdPipe,
    IdToNamePipeEspecialidad,
    CountCitaPipe,
    FiltroEstadoPipe,
    CancelarCitaComponent,
    ReprogramarCitaComponent,
    FormularioCrearCuentaComponent,
    ComunasByRegionPipe,
    IdToNameCentroPipe,
    AgendarHoraComponent,
    HoraYFechaComponent,
    BusquedaPorComunaPipe,
    IdToNameComunaPipe,
    BusquedaPorNombrePipe,
    BusquedaPorRegionPipe,
    IdToNameRegionPipe,
    ListarPacientesComponent,
    ListarEditcitasComponent,
    EditarDescripcionComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NegadoComponent,
    RecuperarContraComponent,
    NuevaContraComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
