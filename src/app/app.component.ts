import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentsHomework';
  inputText = "No Text";

  buttonClicked(event:any)
{
  this.inputText = "button clicked";
}
}
