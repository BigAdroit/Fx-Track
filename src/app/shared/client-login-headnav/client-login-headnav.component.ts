import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-login-headnav',
  templateUrl: './client-login-headnav.component.html',
  styleUrls: ['./client-login-headnav.component.scss']
})
export class ClientLoginHeadnavComponent implements OnInit {
  @Output() toggle = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  tog(){
    this.toggle.emit()
  }

}
