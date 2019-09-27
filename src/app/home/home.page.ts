import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Plugins } from '@capacitor/core';
const { Keyboard } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public loginForm;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.buildLoginForm();
    Keyboard.setAccessoryBarVisible({isVisible: true});
  }

  private buildLoginForm(): FormGroup {
    return this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }


}
