import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skeleton-app';

  loaded = false;

  ngOnInit(): void {
    setInterval(() => {
      this.loaded = true;
    }, 3000);
  }
}
