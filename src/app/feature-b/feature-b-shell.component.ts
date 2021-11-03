import { Component } from '@angular/core';
@Component({selector: 'app-root', template: `
  <!-- Logic to differentiate between web-desktop / web-mobile
    and to display different navigation for this particular feature module -->
  <ion-router-outlet></ion-router-outlet>
`})
export class FeatureBShellComponent {
  constructor() { console.log('FeatureBShellComponent constructor'); }
}
