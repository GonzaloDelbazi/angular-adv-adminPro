import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {

  public menuItems: any[];
  constructor(private sideService: SidebarService)
  {
    this.menuItems = sideService.menu;
    console.log(this.menuItems);
  }


  ngOnInit(): void
  {


  }

}
