import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoginHeadnavComponent } from './client-login-headnav.component';

describe('ClientLoginHeadnavComponent', () => {
  let component: ClientLoginHeadnavComponent;
  let fixture: ComponentFixture<ClientLoginHeadnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLoginHeadnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLoginHeadnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
