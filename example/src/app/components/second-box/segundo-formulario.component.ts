import { Component, OnInit } from '@angular/core';
import { FormularioPostModel } from '../formulario-post-model';

@Component({
  selector: 'app-segundo-formulario',
  templateUrl: './segundo-formulario.component.html',
  styleUrls: ['./segundo-formulario.component.scss']
})
export class SegundoFormularioComponent implements OnInit {

  public post2: FormularioPostModel | undefined;
  

  constructor() {
    this.post2 = new FormularioPostModel;
    this.post2.coloredTitle = "This should be a red box";

   }

  ngOnInit(): void {
  }

}
