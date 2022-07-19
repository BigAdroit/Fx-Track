import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoginSidebarComponent } from './client-login-sidebar.component';

describe('ClientLoginSidebarComponent', () => {
  let component: ClientLoginSidebarComponent;
  let fixture: ComponentFixture<ClientLoginSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLoginSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLoginSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
