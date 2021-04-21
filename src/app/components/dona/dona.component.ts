import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  
  @Input() title = 'Sin nombre';
  @Input() data = [];

  @Input() labels: Label[] = ['Label1', 'Label2', 'Label3'];
  public doughnutChartData: MultiDataSet = [

    [250, 130, 70],
  ];
  public colors: Color[] = [
    {backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
