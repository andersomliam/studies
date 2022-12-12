function a() {
    console.log('Executando a()');
}

function b() {
    console.log('Executando b()');
}

function c() {
    console.log('Executando c()');
    a()
    b()
}

// O event loop garante a execução do código de cima para baixo!
// O Retorno esperado a baixo respeita a ordem que foi evocado as funções!
/* b()
c()
a() */

// Nesse caso o esperado é que execute a c, e só depois as funções a() e b()
c()