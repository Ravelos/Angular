import { Component, OnInit } from '@angular/core';
import { FormularioPostModel } from './components/formulario-post-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'This is the great test of ALL!!!';

  mainTitle:string =" This is the test"

  formUserText:string = "";

  public formularioPosts: FormularioPostModel [] = [];

  constructor(){
    this.formularioPosts = [];

    const form1 = new FormularioPostModel();
    form1.coloredTitle = "This should be a green box";
    form1.userText = "";
    form1.colorClass= "green";
    this.formularioPosts.push(form1);

    const form2 = new FormularioPostModel();
    form2.coloredTitle = "This should be a red box";
    form2.userText="";
    form2.colorClass="red";
    this.formularioPosts.push(form2);

    const form3 = new FormularioPostModel();
    form3.coloredTitle = "This should be a blue box";
    form3.userText = "";
    form3.colorClass="blue";
    this.formularioPosts.push(form3);

  }




  ngOnInit(): void {}

}
