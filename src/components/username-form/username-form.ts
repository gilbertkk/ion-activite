import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'comp-username-form',
  templateUrl: 'username-form.html',
})
export class UsernameForm implements OnInit {
  lendnameForm: FormGroup;
  data: any;

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.lendnameForm = this.formBuilder.group({
      lendname: ['', [Validators.required]]
    });
  }

  onSubmitForm() {
    let lendname = this.lendnameForm.get('lendname').value;
    this.dataService.toggleLendBook(this.data.index)
    this.dataService.setLendname(this.data.index, lendname, 'books');
    this.dataService.emitUsernameForm();
  }
}
