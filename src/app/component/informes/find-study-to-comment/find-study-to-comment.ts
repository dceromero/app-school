import { Component, inject, output } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { VencimientosService } from '../../../services/vencimiento/vencimientos-service';
import { AuthService } from '../../../services/auth/auth-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { PeriodoService } from '../../../services/periodos/periodo-service';
import { AsignaturaInterface } from '../../../interfaces/logros/periodo-interface';
import { ComentarioService } from '../../../services/comentarios/comentario-service';
import { FindCommentInterface, RespComment } from '../../../interfaces/logros/logro-interface';

@Component({
  selector: 'app-find-study-to-comment',
  imports: [PrimengModule, ReactiveFormsModule],
  templateUrl: './find-study-to-comment.html',
  styleUrl: './find-study-to-comment.css',
})
export class FindStudyToComment {

  private authService = inject(AuthService);
  private vencimientosService = inject(VencimientosService);
  private periodoService = inject(PeriodoService);
  private commentService = inject(ComentarioService);

  private fb = inject(FormBuilder);

  outStudient = output<RespComment[] | []>();

  formFindStudytoComment = this.fb.group({
    grado: ['', Validators.required],
    grupo: ['', Validators.required],
    periodo: ['', Validators.required],
  });


  gradosResources = rxResource({
    stream: () => this.vencimientosService.getGrados(this.authService.user()!.userName),
  });

  periodosResources = rxResource({
    stream: () => this.periodoService.getPeriodoActual(parseInt(this.authService.user()!.periodo))
  });

  intPeriodo = parseInt(this.authService.user()!.periodo);

  groupsResources = rxResource({
    stream: () => this.vencimientosService.getGrups(),
  });

  selectedGrado() {
    this.formFindStudytoComment.controls['grupo'].setValue('');
    this.outStudient.emit([]);
  }

  findStudy() {
    let findComment: FindCommentInterface = {
      periodo: parseInt(this.formFindStudytoComment.value.periodo!),
      grado: this.formFindStudytoComment.value.grado || '',
      grupo: this.formFindStudytoComment.value.grupo || ''
    }
    this.commentService.getStudytoComment(findComment).subscribe((resp) => this.outStudient.emit(resp));
  }
}
