import { Component,  } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component  {


  public label1: string[] = ['Computadoras', 'Placas de video', 'Memorias RAM'];
  public data1 = [
    [250, 130, 70],
  ];

}
