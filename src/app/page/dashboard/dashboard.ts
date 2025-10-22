import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "../../shared/menu/menu";
import { PrimengModule } from '../../primeng/primeng-module';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Menu, PrimengModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {

}
