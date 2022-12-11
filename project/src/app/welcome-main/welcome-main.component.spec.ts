import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMainComponent } from './welcome-main.component';

describe('WelcomeMainComponent', () => {
  let component: WelcomeMainComponent;
  let fixture: ComponentFixture<WelcomeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
