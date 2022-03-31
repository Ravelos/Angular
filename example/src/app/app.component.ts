import { Component, OnInit } from '@angular/core';
import { FormularioPostModel } from './components/formulario-post-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'This is the great test of ALL!!!';

  mainTitle:string =" This is the test";

  textAsteriks:string="";

  public formularioPosts: FormularioPostModel;
  constructor(){
    this.formularioPosts = new FormularioPostModel;
    this.formularioPosts.coloredTitle = "This should be a blue box";
    this.formularioPosts.userText = "";

  }






  ngOnInit(): void {}

}
