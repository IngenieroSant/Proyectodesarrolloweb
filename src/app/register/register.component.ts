import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  imports: [
    MatFormFieldModule, MatInputModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  register() {
    if (this.registerForm.valid) {
      
      console.log('Registro exitoso', this.registerForm.value);
    }
  }
}
