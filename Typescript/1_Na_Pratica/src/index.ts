// Declaração de tipos 
let x: number = 10

x = 11

console.log(x);

// Declaraçõoes por Inferencia x Annotation

// Inferencia
let y = 12

// Annotation
let z: number = 12

//y = ''
//z = ''

// Tipos basicos, sempre declarados em letra minuscula
let firstName: string = 'Anderson'
let age: number = 30
let isAdm: boolean = true

// Tipo object
const arrNumber: number[] = [1, 2, 3]

// Tuplas -> tuple
let myTuple: [number, string, string[]]

myTuple = [5, 'teste', ['teste', 'teste']]
//myTuple = [true, true, true]

// Object literals -> {prop: value}
const user: { name: string, age: number } = {
    name: 'Anderson',
    age: 42,
}

console.log(user);
console.log(user.name);

// não é possível adicionar prop ao obijeto 
// user.job = 'programer'  //ERROR

// outro tipo, apenas do typescript
// any -> vai aceitar qualquer valor!
let a: any = 0
a = 'teste'
a = true
a = []

// union -> une mais de um tipo na mesma variavel
// um alternativa para evitar o uso do any
let id: string | number = '10'
id = 200
//id = true //ERROR

// type alias -> para usar com o union
type myType = number | string | boolean
const idMyType: myType = 10
const nameMyType: myType = 'Anderson'
const logonMtType: myType = true

// enum
// tamanho de roupas por exemplo (size: médio, size: Pequeno)
enum Size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande',
}

const camisa = {
    name: 'Camisa gola V',
    size: Size.G
}

console.log(camisa);

// literal types -> só vai aceitar o valor que foi atribuido
let test: 'autenticado' | null
test = 'autenticado'
test = null
//test = true //ERROR
//test = 'outrovalor' //ERROR

// tipando os argumentos de uma função
function soma(a: number, b: number) {
    return a + b;
}
console.log(soma(8, 2));

// tipando o tipo de retorno de uma função
function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Anderson'));

// tipando funções que não retornam nada!
// o typescript até aceita de forma implicita, mas é importante tipar!
function logger(msg: string): void {
    console.log(msg);
}
logger('logger: Anderson');

// Paramento opcional
function greeting(name: string, greet?: string): void {
    // O typescript não valida se o paremetro veio ou não...
    console.log(`Olá, ${greet} ${name}`);

    if (greet) {
        console.log(`Olá, ${greet} ${name}`);
        return;
    }
    console.log(`Olá, ${name}`);


}
greeting('Anderson');
greeting('Anderson', 'Sr.');

// interfaces
interface MathFunctionParams {
    n1: number;
    n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = { n1: 5, n2: 10 }

console.log(multiplyNumbers(someNumbers));

// narrowing -> estreitamento, restrito
// Checagem de tipo 
function doSomething(info: number | boolean) {
    if (typeof info === 'number') {
        console.log(`O número é: ${info}`);
        return;
    }
    console.log('Não foi passado nenhum número!');
}
doSomething(5)
doSomething(true)

// generics, tbm é uma opção para evitar o uso do any
function showArrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}

const a1 = [1, 2, 3, 4];
const a2 = ['a', 'b', 'c'];

showArrayItems(a1);
showArrayItems(a2);

class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);

    }

    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`Informação Role!!`);
            return;
        }
        console.log('Permissão negada!');
    }
}

const zeca = new User('Anderson', 'Admin', true)
console.log(zeca);

zeca.showUserName();
zeca.showUserRole(false);

// interfaces em classes
interface IVehicle {
    brand: string;
    showBrand(): void;
}

class Car implements IVehicle {
    brand;
    Wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.Wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);

    }
}
const fusca = new Car('VW', 4);
fusca.showBrand();

// herança de class
class SuperCar extends Car {
    engine;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine
    }
}
const a4 = new SuperCar('Audi', 4, 2.0)
console.log(a4);
a4.showBrand();

// decorators -> função do typescript
// Validação de dados
// Para usar descomentar -> "experimentalDecorators" no tscconfig

// na criação do usuario será inserido + dois paramentros: id e createdAt
function BaseParameters(){
    return function <T extends { new (...arg: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParameters()
class Person { 
    name;

    constructor(name: string){
        this.name = name;
    }
}
const anderson = new Person('Anderson');
console.log(anderson);


//TODO: PROJETO DE REACT COM TYPESCRIPT E API DO GITHUB
// https://www.youtube.com/watch?v=3sQITRihW_A