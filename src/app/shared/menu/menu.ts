import { Component, inject, OnInit, signal } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng-module';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth/auth-service';
import { MenuService } from '../../services/menu/menu-service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-menu',
    imports: [PrimengModule],
    templateUrl: './menu.html',
    styleUrl: './menu.css'
})
export class Menu {

    authService = inject(AuthService);
    menuService = inject(MenuService);
    menuResources = rxResource({
        stream: () => this.menuService.getMenuOptions(this.authService.user()!.userGroup),
    })

}
