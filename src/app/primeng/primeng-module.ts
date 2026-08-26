import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TabsModule } from 'primeng/tabs';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';

@NgModule({
  declarations: [],
  exports: [
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DialogModule,
    DatePickerModule,
    FieldsetModule,
    FloatLabelModule,
    InputNumberModule,
    InputTextModule,
    MenuModule,
    PanelMenuModule,
    PasswordModule,
    SelectModule,
    TableModule,
    TabsModule ,
    TextareaModule,
    ToggleSwitchModule,
  ]
})
export class PrimengModule { }
