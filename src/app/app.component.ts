import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*Lista de Objetos*/
  titulo = 'Atividade';
  registro = [{
    'nome': 'Alexandre Pacheco',
    'ru': '3451572',
    'curso': 'Análise e Desenvolvimento de Sistemas',
    'datanascimento': '30/10/1987'
  },{
    'nome': 'Aluno2',
    'ru': '1234567',
    'curso': 'WebDesign',
    'datanascimento': '13/05/1980'
  },{
    'nome': 'Aluno3',
    'ru': '7890123',
    'curso': 'Ciência de Dados',
    'datanascimento': '13/05/1974'
  },{
    'nome': 'Aluno4',
    'ru': '2541234',
    'curso': 'Engenharia de Software',
    'datanascimento': '13/05/1970'
  },{
    'nome': 'Aluno5',
    'ru': '5465217',
    'curso': 'Engenharia da Computação',
    'datanascimento': '13/05/1978'
  }];
}
