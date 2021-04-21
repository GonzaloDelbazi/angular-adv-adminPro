import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit
{
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // @Input('valor') progreso = 10;

  @Input() progreso = 10;

  @Input() btnClass = 'btn-primary';
  @Input() btnClass2 = 'btn btn-primary';
  

  @Output('vSalida') valorSalida: EventEmitter<number> = new EventEmitter();


  cambiarValor(valor: number)
  {
    if(this.progreso < 0)
    {
      this.valorSalida.emit(100);
      this.progreso = 0;
    }else
    {
      if (this.progreso > 100 )
      {
        this.valorSalida.emit(0);
        this.progreso = 100;
      }
    }
    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }
  onChange(nuevoValor: number)
  {
    if(nuevoValor >= 100)
    {
      this.progreso = 100;
    }else if(nuevoValor <= 0)
    {
      this.progreso = 0;
    }


    this.valorSalida.emit(this.progreso);

  }

}
