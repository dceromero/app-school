import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogroServices {
  getProductsData() {
        return [
            {
                name: 'Bamboo Watch',
                n1: 40,
                n2: 30,
                n3: 30,
            },
            {
                name: 'Black Watch',
                n1: 40,
                n2: 30,
                n3: 30,
            },
            {
                name: 'Blue Band',
                n1: 40,
                n2: 30,
                n3: 30,
            },
            {
                name: 'Blue T-Shirt',
                n1: 40,
                n2: 30,
                n3: 30,
            },
        ];
    }
}
