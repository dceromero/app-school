import { Component, inject, OnInit } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { LogroServices } from '../../../services/logros/logro-services';

@Component({
  selector: 'app-grid-logros',
  imports: [PrimengModule],
  templateUrl: './grid-logros.html',
  styleUrl: './grid-logros.css'
})
export class GridLogros implements OnInit{

  private customersService: LogroServices = inject(LogroServices);
  customers: any[] = [];

  ngOnInit(): void {
    this.customers = this.customersService.getProductsData();
  }

}
