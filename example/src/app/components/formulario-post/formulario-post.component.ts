import { Component, Input, OnInit } from '@angular/core';
import { FormularioPostModel } from '../formulario-post-model';

@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrls: ['./formulario-post.component.scss']
})
export class FormularioPostComponent implements OnInit {

  @Input()

  public post: FormularioPostModel | undefined;

  formUserText:string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
