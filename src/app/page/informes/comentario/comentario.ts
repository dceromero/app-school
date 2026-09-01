import { Component } from '@angular/core';
import { FindStudyToComment } from '../../../component/informes/find-study-to-comment/find-study-to-comment';
import { RespComment } from '../../../interfaces/logros/logro-interface';
import { GridStudyToComment } from '../../../component/informes/grid-study-to-comment/grid-study-to-comment';

@Component({
  selector: 'app-comentario',
  imports: [FindStudyToComment, GridStudyToComment],
  templateUrl: './comentario.html',
  styleUrl: './comentario.css',
})
export default class Comentario {

  listStudients: RespComment[] | [] = [];
  studient: RespComment | null = null;
  selectedStudient: boolean = false;

  getStudients(studient: RespComment[] | []) {
   if(studient.length==0){
    this.selectedStudient = false;
   }
    this.listStudients = studient;
  }

  changeSelectedStudient(event:boolean) {
    this.selectedStudient = event;
  }


}
