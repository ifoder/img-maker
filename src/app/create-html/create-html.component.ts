import { animation } from '@angular/animations';
import { SlideInOutAnimation } from './../animation';
import { Image } from './../base/base.component';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-create-html',
  templateUrl: './create-html.component.html',
  animations: [SlideInOutAnimation],
})
export class CreateHtmlComponent extends BaseComponent implements OnInit {
  @ViewChild('titleContainer', { static: true }) titleContainer: any;
  newImageElem: any;
  element?: string;

  constructor(private router: Router) {
    super();
    this.image = router.getCurrentNavigation()?.extras.state as Image;
    this.setLocalStorageImage();
  }

  ngOnInit() {
    this.getLocalStorageImage();

    /* First method using JavaScript functions to create and append the element to the DOM */
    this.newImageElem = document.createElement('div');
    this.newImageElem.innerHTML = `<a href="${this.image.clickUrl}" target="_blank"><img src="${this.image.base64}" alt="${this.image.fileName}" /></a>`;
    this.titleContainer.nativeElement.appendChild(this.newImageElem);
    console.log('newImageElem', this.newImageElem);
    console.log('titleContainer', this.titleContainer);
    console.log('titleContainer', this.titleContainer.nativeElement);

    /* Second method, much simpler using innerHTML directive from Angular */
    this.element = `<a href="${this.image.clickUrl}" target="_blank"><img src="${this.image.base64}" alt="${this.image.fileName}" (click)="window.open(${this.image.clickUrl})"/>`;
  }
}
