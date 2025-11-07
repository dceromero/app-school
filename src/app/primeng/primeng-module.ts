import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [],
  exports: [
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    FloatLabelModule,
    InputTextModule,
    MenuModule,
    PasswordModule,
    SelectModule,
    TextareaModule,
    ToggleSwitchModule,
    TableModule,
    PanelMenuModule,
    DialogModule,
    InputNumberModule
  ]
})
export class PrimengModule { }
