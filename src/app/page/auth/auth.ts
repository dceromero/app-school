import { Component, inject, signal } from '@angular/core';
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

  visible = signal<boolean>(false);
  messageService = signal<string>('');



  loadLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (isValid) => {
          if (!isValid) {
            this.messageService.set('Credenciales incorrectas');
            this.visible.set(true);
            return;
          }
          this.router.navigateByUrl('/dashboard');
        },
      });
    }
  }

  toggleDarkMode(){
    const element = document.querySelector('html') as HTMLElement;
    element.classList.toggle('my-app-dark')
  }
}
