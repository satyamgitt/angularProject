import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMorePageComponent } from './see-more-page.component';

describe('SeeMorePageComponent', () => {
  let component: SeeMorePageComponent;
  let fixture: ComponentFixture<SeeMorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeMorePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeMorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
