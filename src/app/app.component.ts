import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app05182020';

  navs =[
    {name: 'Home', route: '/', id: 100},
    {name: 'About', route: '/about', id: 101},
    {name: 'Contact', route: '/contact', id: 102},
  ]
}
