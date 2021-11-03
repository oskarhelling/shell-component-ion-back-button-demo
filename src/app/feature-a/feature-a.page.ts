import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ template: `
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start"><ion-back-button></ion-back-button></ion-buttons>
      <ion-title>Feature A</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-button (click)="router.navigate(['feature-a', 'list-page'])">Go to list page</ion-button>
  </ion-content>
`})
export class FeatureAPage {
  constructor(public router: Router) {}
}
