//primeira forma - literal
var aluno = {
    nome: "Ana Beatriz",
    ra: 101010,
};

document.write("O nome do aluno é :" + aluno.nome + "<br>" + "RA do aluno:" + aluno.ra);


//segunda forma com função construtora

function Aluno(Nome, RA)
{
    this.Nome = Nome;
    this.Ra = RA;
    
}
const objAluno = new Aluno ("00112233", "Albert Jobs");

document.write("<br>"+ "<br>" + "O nome do aluno é :" + objAluno.Nome + "<br>" + "RA do aluno:" + objAluno.Ra);

//terceira forma utilizando o método object.create()

const AlunoPrototype = {
    RA: '',
    Nome: ''
  };
  
  const aluno1 = Object.create(AlunoPrototype);
  aluno1.RA = '0030482121012';
  aluno1.Nome = 'Regiane Lara';
  
  document.write("<br>"+ "<br>" + "O nome do aluno é :" + aluno1.Nome + "<br>" + "RA do aluno:" + aluno1.RA);