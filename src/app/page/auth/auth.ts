import { Component, inject } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng-module';
import { AuthService } from '../../services/auth/auth-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [PrimengModule, ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  private authService = inject(AuthService);
  private router = inject(Router)
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    nombreUsu: ['', Validators.required],
    password: ['', Validators.required]
  });

  visible: boolean = false;
  messageService: string = '';



  loadLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.messageService = err.error;
          this.visible = true;
        }
      });
    }
  }
}
