import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-login-sidebar',
  templateUrl: './client-login-sidebar.component.html',
  styleUrls: ['./client-login-sidebar.component.scss']
})
export class ClientLoginSidebarComponent implements OnInit {
  @Input() show! : boolean
  constructor() { }

  ngOnInit(): void {
  }

}
