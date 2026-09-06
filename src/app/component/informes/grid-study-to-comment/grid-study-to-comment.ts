import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { RespComment, SaveComment } from '../../../interfaces/logros/logro-interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComentarioService } from '../../../services/comentarios/comentario-service';

@Component({
  selector: 'app-grid-study-to-comment',
  imports: [PrimengModule, ReactiveFormsModule],
  templateUrl: './grid-study-to-comment.html',
  styleUrl: './grid-study-to-comment.css',
})
export class GridStudyToComment {


  InListStudient = input<RespComment[]>();
  inSelectedStudient = input<boolean>();
  outSelectedStudient = output<boolean>();
  outListStudient = output<RespComment[]>();
  studient: RespComment | null = (null);

  private commentService = inject(ComentarioService);
  private fb = inject(FormBuilder);

  formCommentStudient = this.fb.group({
    comment: ['', Validators.required]
  })

  getStudient(_studient: RespComment) {
    this.studient = (_studient);
    this.outSelectedStudient.emit(true);
  }

  saveComment() {
    this.studient!.comentario = (this.formCommentStudient.get('comment')?.value ?? '');
    let comment: SaveComment = {
      ...this.studient!
    }
    this.commentService.postSaveComment(comment).subscribe((resp) => {
      this.outListStudient.emit(resp);
    })
  }

  getNameStudient(_studient: RespComment | null): string {
    if (_studient) {
      return `Comentario para el estudienta: ${_studient?.apellidos} - ${_studient?.nombres}`
    } else {
      return 'Elige un estudiante'
    }
  }

  getIcon(_studient: RespComment): string {
    return _studient.comentario != ' ' ? 'pi pi-check' : 'pi pi-info-circle'
  }
}
