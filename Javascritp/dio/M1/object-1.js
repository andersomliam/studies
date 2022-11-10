const pessoa = {
    nome: 'Anderson Lima',
    idade: 42,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

/**
pessoa.descrever();

pessoa.nome = 'Davi Oliveira';
pessoa.idade = 7;

pessoa.descrever();

pessoa['outro_nome'] = 'Patricia';

console.log(pessoa['outro_nome']); */

class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, e minha idade é ${this.idade}`);
    }
}

/**
const anderson = new Pessoa();
anderson.nome = 'Anderson Lima';
anderson.idade = 42;

const davi = new Pessoa();
davi.nome = 'Davi Oliveira';
davi.idade = 7;

anderson.descrever();
davi.descrever(); */

/** 
const anderson = new Pessoa('Anderson Lima', 42);
const davi = new Pessoa('Davi Oliveira', 8);

console.log(anderson);
console.log(davi); */

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);

    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
        
    }
}

const anderson = new Pessoa('Anderson Lima', 42);
const davi = new Pessoa('Davi Oliveira', 8);

compararPessoas(anderson, davi);