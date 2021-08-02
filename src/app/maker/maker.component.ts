import { BaseComponent } from '../base/base.component';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CroppedEvent } from 'ngx-photo-editor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.scss'],
})
export class MakerComponent extends BaseComponent {
  imageChangedEvent: any;

  imgForm = this.fb.group({
    file: new FormControl(this.image.fileName, Validators.required),
    clickUrl: new FormControl(this.image.clickUrl, Validators.required),
    animation: new FormControl(this.image.animation, Validators.required),
  });

  get file() {
    return this.imgForm.get('file')!;
  }
  get clickUrl() {
    return this.imgForm.get('clickUrl')!;
  }
  get animation() {
    return this.imgForm.get('animation')!;
  }

  constructor(private fb: FormBuilder, private router: Router) {
    super();
  }

  fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
  }

  imageCropped(event: CroppedEvent) {
    this.image.base64 = event.base64!;
    this.image.file = event.file;
  }

  onSubmit(): void {
    if (!this.getErrorMessage()) {
      this.image.fileName = this.image.file?.name!;
      this.image.animation = this.animation.value;
      this.image.clickUrl = this.clickUrl.value;
      this.navigatePageState();
    }
  }

  navigatePageState(): void {
    this.router.navigateByUrl('/html', {
      state: this.image,
    });
  }

  getErrorMessage() {
    if (
      this.clickUrl.hasError('required') ||
      this.animation.hasError('required') ||
      this.file.hasError('required')
    ) {
      this.clickUrl.markAllAsTouched();
      this.animation.markAllAsTouched();
      this.file.markAllAsTouched();
      return true;
    } else {
      return false;
    }
  }
}
