import { Component, OnInit } from '@angular/core';
import { FormularioPostModel } from '../formulario-post-model';

@Component({
  selector: 'app-tercer-formulario',
  templateUrl: './tercer-formulario.component.html',
  styleUrls: ['./tercer-formulario.component.scss']
})
export class TercerFormularioComponent implements OnInit {

  public post3: FormularioPostModel | undefined

  constructor() {
    this.post3 = new FormularioPostModel;
    this.post3.coloredTitle="This should be a blue box";
  }

  ngOnInit(): void {
  }

}
