import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Cita } from 'src/app/interfaces/cita';
import { ServicioCitasService } from 'src/app/serv/cita/servicio-citas.service';

@Component({
  selector: 'app-reprogramar-cita',
  templateUrl: './reprogramar-cita.component.html',
  styleUrls: ['./reprogramar-cita.component.scss']
})
export class ReprogramarCitaComponent implements OnInit, OnDestroy {
  @Input() cita: Cita;
  public reproForm: FormGroup;
  public model: NgbDateStruct;
  public date: Date;
  public timeCut: string[];
  public time: String;
  public updateSubscription: Subscription;

  constructor(

    public servicioCitas: ServicioCitasService,
    public activeModal: NgbActiveModal,
    private _builder: FormBuilder,
    private calendar: NgbCalendar

  ) {
    this.date = new Date();

    this.reproForm = this._builder.group({
      timeInput: ['', Validators.required],
      accept: [null,Validators.required],
    })
  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  async onClickAccept() {
    //SE SEPARA EL STRING DE TIEMPO
    this.time = this.reproForm.value.timeInput;
    this.timeCut = this.time.split(':');
    //SE GUARDAN LAS HORAS Y LOS MINUTOS POR SEPARADO
    this.date.setHours( parseInt(this.timeCut[0],10) - 4 , parseInt(this.timeCut[1],10) );

    this.cita.fechaHora = this.date;


    this.servicioCitas.updateCita(this.cita).subscribe(() => {
      console.log('Content updated successfully!')
    })
    window.location.reload();
  }


  onDateSelect(valor: NgbDateStruct) {
    //SE LLENA EL ESPACIO PARA LA FECHA
    this.date.setFullYear(valor.year, valor.month - 1, valor.day);
  }


}
