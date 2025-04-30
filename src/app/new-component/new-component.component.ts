import { Component, OnInit} from '@angular/core';
import { TestComponent } from '../../test-component';

@Component({
  selector: 'app-new-component',
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.sass'
})
export class TestComponentComponent implements OnInit{
  testItem: TestComponent  = {
    id: 1,
    name: "Jonh Doe",
    isComplete: false

  }
  constructor{} {}
  ngOnInit{}: void {

  }

}
