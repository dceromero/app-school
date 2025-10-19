import { Component } from '@angular/core';
import { GridLogros } from '../../component/logros/grid-logros/grid-logros';
import { FindLogros } from '../../component/logros/find-logros/find-logros';

@Component({
  selector: 'app-logros',
  imports: [FindLogros, GridLogros],
  templateUrl: './logros.html',
  styleUrl: './logros.css'
})
export default class Logros {

}
