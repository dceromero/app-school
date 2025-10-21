import { Component, inject, OnInit } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';

@Component({
  selector: 'app-grid-logros',
  imports: [PrimengModule],
  templateUrl: './grid-logros.html',
  styleUrl: './grid-logros.css'
})
export class GridLogros implements OnInit{

  customers: any[] = [];

  ngOnInit(): void {
  
  }

}
