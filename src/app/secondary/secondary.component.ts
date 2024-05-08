import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-secondary',
  standalone: true,
  imports: [],
  templateUrl: './secondary.component.html',
  styleUrl: './secondary.component.css'
})
export class SecondaryComponent {

  @Input() botonname = '';

}


