import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImgComponent } from './page-img.component';

describe('PageImgComponent', () => {
  let component: PageImgComponent;
  let fixture: ComponentFixture<PageImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
