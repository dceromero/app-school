import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "../../shared/menu/menu";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Menu ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {

}
