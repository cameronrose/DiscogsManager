import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Authenticate } from '../../models/user';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'dc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Authenticate>();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private oauthService: OAuthService) {}

  ngOnInit() {}

  submit() {
    this.oauthService.initImplicitFlow();
    // if (this.form.valid) {
    //   this.submitted.emit(this.form.value);
    // }
  }

}
