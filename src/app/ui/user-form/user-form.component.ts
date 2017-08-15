import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/auth.service";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  newUser = true; // to toggle login or signup form
  passReset = false; // set to true when password reset is triggered

  name: string;
  email: string;
  password: string;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

   ngOnInit(): void {
    //  this.buildForm();
   }

   toggleForm() {
     this.newUser = !this.newUser;
   }

   signup(): void {
     this.readValues();
    //  console.log(this.email)
     this.auth.emailSignUp(this.name, this.email, this.password);
   }

   login(): void {
     this.readLoginValues();
     this.auth.emailLogin(this.email, this.password);
   }

   resetPassword() {
     this.readLoginValues();
     this.auth.resetPassword(this.email)
     .then(() => this.passReset = true)
   }

   readValues(){
      this.name = (document.getElementById("name") as HTMLInputElement).value;
      this.email = (document.getElementById("email") as HTMLInputElement).value;      
      this.password = (document.getElementById("password") as HTMLInputElement).value;
   }

  readLoginValues(){     
      this.email = (document.getElementById("email") as HTMLInputElement).value;      
      this.password = (document.getElementById("password") as HTMLInputElement).value;
   }

  //  buildForm(): void {
  //    this.userForm = this.fb.group({
  //      'name:': ['', [
  //         //  Validators.required
  //        ]
  //      ],
  //      'email': ['', [
  //          Validators.required,
  //          Validators.email
  //        ]
  //      ],
  //      'password': ['', [
  //        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
  //        Validators.minLength(6),
  //        Validators.maxLength(25)
  //      ]
  //    ],
  //    });

  //   //  this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
  //   //  this.onValueChanged(); // reset validation messages
  //  }

  // Updates validation state on form changes.
  //  onValueChanged(data?: any) {
  //    if (!this.userForm) { return; }
  //    const form = this.userForm;
  //    for (const field in this.formErrors) {
  //      // clear previous error message (if any)
  //      this.formErrors[field] = '';
  //      const control = form.get(field);
  //      if (control && control.dirty && !control.valid) {
  //        const messages = this.validationMessages[field];
  //        for (const key in control.errors) {
  //          this.formErrors[field] += messages[key] + ' ';
  //        }
  //      }
  //    }
  //  }

  // formErrors = {   
  //    'email': '',
  //    'password': ''
  //  };

  //  validationMessages = {
  //    'name': {
  //      'required':      'Name is required.'
  //    },
  //    'email': {
  //      'required':      'Email is required.',
  //      'email':         'Email must be a valid email'
  //    },
  //    'password': {
  //      'required':      'Password is required.',
  //      'pattern':       'Password must be include at one letter and one number.',
  //      'minlength':     'Password must be at least 4 characters long.',
  //      'maxlength':     'Password cannot be more than 40 characters long.',
  //    }
  //  };

}
