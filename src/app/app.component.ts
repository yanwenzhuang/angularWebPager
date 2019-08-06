import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
              './app.componentfooter.scss',
              './app.componentmainTop.scss',
              './app.componentbottom.scss' 
            ]
})


export class AppComponent {
 
  goDistance(location: string): void {
    window.location.hash = ''; 
    window.location.hash = location;
}

}
