import { Component }          from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'home',
  templateUrl: `app/home.component.html`,
  styleUrls: ['app/style.css']
})
export class HomeComponent {
  title = 'Tour of Heroes';
}
