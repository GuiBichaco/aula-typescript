let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

console.log("Exercício 1");
// Exercício 1 - Tipagem e Arrays
// Crie um array de números e imprima a soma dos valores.
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

console.log("Exercício 2");
// Exercício 2 - Função Tipada
// Crie uma função que recebe um nome e retorna uma mensagem personalizada.
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));

console.log("Exercício 3");
// Exercício 3 - Classe e Instância
// Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());  