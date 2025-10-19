import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengModule } from './primeng/primeng-module';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimengModule, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-school');
}
