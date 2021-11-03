import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ template: `
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start"><ion-back-button></ion-back-button></ion-buttons>
      <ion-title>Root Page</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-item><ion-text>This is the root page. Features A and B need to have different
      navigation tabs if the user is on web-mobile otherwise we can use a shared desktop-layout for navigation.
      The urls will stay platform neutral.</ion-text></ion-item>
    <ion-button (click)="router.navigate(['feature-a'])">Go to Feature A</ion-button>
    <ion-button (click)="router.navigate(['feature-b'])">Go to Feature B</ion-button>
  </ion-content>
`})
export class RootPagePage implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

}
