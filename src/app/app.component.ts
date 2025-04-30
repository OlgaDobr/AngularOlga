import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: '/app.component.sass',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'testApp';
}
