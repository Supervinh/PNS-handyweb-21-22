import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Config} from "../../../models/config/config.model";
import {ConfigVariableModel} from "../../../models/config/config.variable.model"

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnInit {

  public configForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, public configVariables: ConfigVariableModel) {
    this.configForm = this.formBuilder.group({
      name: [''],
      size: [''],
      //verticalEccentricity: [''],
      //horizontalEccentricity: [''],
      font: [''],
      colorButtons: ['']
    })
  }

  ngOnInit(): void {
  }

  addConfig(): void {
    const config: Config = this.configForm.getRawValue() as Config
    console.log(config)
    this.userService.addConfig(config)
  }

}
