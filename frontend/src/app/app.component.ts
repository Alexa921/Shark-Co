import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NavComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tu-proyecto';
}
