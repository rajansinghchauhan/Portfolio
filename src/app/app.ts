import { AfterViewInit, Component, signal } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App{
  
  protected readonly title = signal('PortfolioApp');

}
