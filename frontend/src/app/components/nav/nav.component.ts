import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ⬅️ IMPORTANTE

@Component({
  selector: 'app-nav',
  standalone: true, // ⬅️ necesario para standalone components
  imports: [RouterModule], // ⬅️ para que funcione [routerLink]
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {}
