import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ template: `
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start"><ion-back-button></ion-back-button></ion-buttons>
      <ion-title>Feature B</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-item><ion-text>The detail page in Feature B, which we want to be able to access
      from Feature A. If we came from there, we would want to navigate back to Feature
      A's list from here.</ion-text></ion-item>
  </ion-content>
`})
export class FeatureBPage {
  constructor( public router: Router ) { }
}
