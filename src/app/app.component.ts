import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondaryComponent } from './secondary/secondary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SecondaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-practica';
  image = 'assets/images.jpg'
  icecreams = ['Mora', 'Fresa']

  stringboton="1"


}
