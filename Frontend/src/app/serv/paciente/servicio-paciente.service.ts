import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Paciente } from 'src/app/interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class ServicioPacienteService {
  private servidor: String;
  constructor(private servicio:HttpClient) { 
    this.servidor= "http://127.0.0.1:3000"
  }

  /**
   * Devuelve un paciente
   * @params id - id del paciente
   * @return paciente - paciente
   */
  public getPacienteById(id: number){
   let paciente = this.servicio.get<Paciente>(`${this.servidor}/api/paciente/${id}`);
   return paciente;
  }

  public getPacientes(){
    let pacientes = this.servicio.get<Paciente[]>(`${this.servidor}/api/paciente/all`);
    return pacientes;
   }

   public addPaciente(paciente: Paciente){
    let newPaciente = this.servicio.post<Paciente>(`${this.servidor}/api/paciente/`,paciente);
    return newPaciente;
  }

  public validarPregunta(email: string,pregunta: number,respuesta: string):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    let paciente = this.servicio.get<Paciente>(`${this.servidor}/api/paciente/recuperar?email=${email}&pregunta=${pregunta}&respuesta=${respuesta}`);
   return paciente;
   }
   public updateContra(paciente: Paciente){
    let citas = this.servicio.put<Paciente>(`${this.servidor}/api/paciente/update/`,paciente);
    return citas;
  }
}