import { Router } from '@angular/router';
export interface Image {
  fileName: string;
  clickUrl: string;
  animation: string;
  base64: string;
  file?: File;
}

export abstract class BaseComponent {
  title = 'img-maker';
  subTitle = 'What do you want to do next with your image?';

  // width image after cropped
  resizeToWidth = 1000;

  localStorageFileName = 'image';

  buttonSubmit = 'Submit';

  inputFile: any = {
    label: 'Choose File',
    icon: 'folder',
  };

  inputClickUrl: any = {
    label: 'Click Url',
    placeholder: 'htttp://example.com',
  };

  selectAnimation: any = {
    label: 'Animation',
    options: [
      { value: 'ltr', text: 'Left to right' },
      { value: 'rtl', text: 'Right to left' },
    ],
  };

  image: Image = {
    fileName: '',
    clickUrl: '',
    animation: '',
    base64: '',
  };

  getLocalStorageImage() {
    let data = JSON.parse(localStorage.getItem(this.localStorageFileName)!);
    this.image = data;
  }

  setLocalStorageImage() {
    if (this.image)
      localStorage.setItem(
        this.localStorageFileName,
        JSON.stringify(this.image)
      );
  }

  navigateToUrl() {
    window.open(this.image.clickUrl);
  }
}
