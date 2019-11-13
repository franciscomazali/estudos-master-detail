import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.scss']
})
export class NovoFuncionarioComponent implements OnInit {
  currentAction: string;
  categoryForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submitingForm = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildCategoryForm();
  }
  submitForm(email) {
    console.log(email);
  }
  private buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      name: [null],
      email: [null, [Validators.required, Validators.minLength(2)]],
      tipo: [null],
      documento: [null],
      telefone: [null]
    });
  }

}
