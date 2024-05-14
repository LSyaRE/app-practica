import { Component } from '@angular/core';

@Component({
  selector: 'app-secondary',
  standalone: true,
  imports: [],
  templateUrl: './secondary.component.html',
  styleUrl: './secondary.component.css'
})
export class SecondaryComponent {

  option: string = '' 


  changeOption(){
    this.option = {2: '1',1: '2'}[this.option] ?? '1';

  }


}
