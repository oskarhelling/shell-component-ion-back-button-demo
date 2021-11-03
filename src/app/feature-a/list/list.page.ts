import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ template: `
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start"><ion-back-button></ion-back-button></ion-buttons>
      <ion-title>List Page</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-item><ion-text>This is a list page in feature A. Here the user can choose a particular
      detail page in Feature B to visit. After that he should be able to navigate back here.
    </ion-text></ion-item>
    <ion-button (click)="router.navigate(['feature-b'])">Go to detail page</ion-button>
  </ion-content>
`})
export class ListPage {
  constructor( public router: Router) { }
}
