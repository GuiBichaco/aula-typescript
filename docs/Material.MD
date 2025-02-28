**# Introdução ao TypeScript para Aplicações Modernas**

> ## Objetivo
Nesta aula, vamos entender os conceitos fundamentais do TypeScript, suas vantagens em relação ao JavaScript e como utilizá-lo para criar códigos mais seguros e organizados. Após a introdução teórica, realizaremos exercícios práticos para reforçar os aprendizados.

## 1. O que é TypeScript?
TypeScript é um superset do JavaScript criado pela Microsoft que adiciona tipagem estática ao JavaScript. Ele ajuda a detectar erros durante o desenvolvimento, tornando o código mais confiável e manutenível.

### 1.1. Vantagens do TypeScript
- **Tipagem Estática**: Permite detectar erros antes da execução.
- **Melhor Autocompletar (IntelliSense)**: Ajuda no desenvolvimento com sugestões mais precisas.
- **Mais Fácil de Manter**: Código mais legível e organizado.
- **Compatibilidade com JavaScript**: Qualquer código JavaScript é um código TypeScript válido.

### 1.2. Instalando TypeScript
Para instalar o TypeScript globalmente, use:

```sh
npm install -g typescript
```

Para verificar a versão instalada:

```sh
tsc --version
```

### 1.3. Compilando um arquivo TypeScript
Salve o seguinte código em um arquivo `exemplo.ts`:

```ts
let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);
```

Para compilar e gerar um arquivo JavaScript:

```sh
tsc exemplo.ts
```

Isso criará um arquivo `exemplo.js` que pode ser executado no Node.js ou em um navegador.

## 2. Tipos Básicos e Declaração de Variáveis em TypeScript
TypeScript é uma extensão do JavaScript que adiciona tipagem estática à linguagem. Isso significa que podemos definir explicitamente os tipos de dados das variáveis, permitindo que o compilador verifique erros de tipo durante o desenvolvimento, antes mesmo de executar o código. Essa abordagem ajuda a evitar bugs comuns e torna o código mais previsível e documentado.

### Exemplo de Declaração de Variáveis com Tipos
No exemplo abaixo, declaramos três variáveis com tipos específicos:

```ts
let nome: string = "Maria";
let idade: number = 30;
let ativo: boolean = true;
```

Vamos analisar cada parte:

> ```ts
> let nome: string = "Maria";
> ```  
> - `let`: Palavra-chave para declarar uma variável mutável.
> - `nome`: Nome da variável.
> - `: string`: Anotação de tipo que especifica que `nome` deve ser uma `string`.
> - `= "Maria"`: Atribuição de um valor compatível com o tipo `string`.

> ```ts
> let idade: number = 30;
> ```  
> - `: number`: Indica que `idade` deve ser um número.
> - `30`: Valor numérico válido.

> ```ts
> let ativo: boolean = true;
> ```  
> - `: boolean`: Define que `ativo` deve ser um valor booleano (`true` ou `false`).

### O Que Acontece com Tipos Incompatíveis?
Se tentarmos atribuir um valor de tipo diferente ao declarado, o TypeScript gera um erro de compilação. Por exemplo:

```ts
idade = "30"; // Erro: Tipo 'string' não é atribuível a 'number'.
```

#### Explicação do erro:
A variável `idade` foi declarada como `number`, mas recebeu uma string (`"30"`). O TypeScript detecta essa inconsistência e bloqueia a operação, garantindo que a variável mantenha seu tipo original.

### Explicação Detalhada do Código

#### Sintaxe de Tipagem
A anotação `: tipo` é colocada após o nome da variável, antes da atribuição (`=`).  
Exemplo: `let variavel: tipo = valor;`.

#### Tipos Básicos Usados:
- `string`: Representa texto (ex: "Olá").
- `number`: Representa números (ex: `10`, `3.14`).
- `boolean`: Representa valores lógicos (`true` ou `false`).

#### Inferência de Tipos
O TypeScript também pode inferir tipos automaticamente. Por exemplo, em `let nome = "Maria";`, o tipo `string` é inferido sem necessidade de anotação explícita. Porém, declarar tipos manualmente é útil para garantir clareza e segurança.

### 2.1. Declaração de Variáveis
Em TypeScript, podemos declarar variáveis especificando seus tipos:

```ts
let nome: string = "Maria";
let idade: number = 30;
let ativo: boolean = true;
```

Se tentarmos atribuir um valor incompatível, o TypeScript exibirá um erro.

### 2.2. Tipos Comuns
- `string`: Para textos.
- `number`: Para números inteiros e decimais.
- `boolean`: Para valores `true` ou `false`.
- `array`: Para listas de valores do mesmo tipo.
- `tupla`: Para arrays de tamanho fixo com tipos diferentes.
- `enum`: Para definir um conjunto de valores nomeados.
- `any`: Tipo dinâmico que aceita qualquer valor (**evitar uso excessivo**).

## 2.3. Arrays e Tuplas

### O que é um array?
Um array é uma coleção ordenada de elementos do mesmo tipo. No exemplo, `notas` é declarado como `number[]`, indicando que todos os elementos devem ser números.

#### Características:
- Permite adicionar, remover ou modificar elementos livremente.
- O tamanho do array é flexível (pode crescer ou diminuir).
- Todos os elementos devem seguir o tipo definido (neste caso, `number`).

```typescript
let notas: number[] = [8, 9, 10];
notas.push(7); // Adiciona um novo elemento (7) ao array
console.log(notas[0]); // Saída: 8 (acesso pelo índice)
```

### O que é uma tupla?
Uma tupla é uma estrutura que permite armazenar tipos específicos em posições fixas. No exemplo, `aluno` é declarado como `[string, number]`, indicando que:
- A primeira posição (`aluno[0]`) deve ser uma `string` (nome).
- A segunda posição (`aluno[1]`) deve ser um `number` (idade).

#### Características:
- A ordem e os tipos dos elementos são rígidos (não é possível inverter `string` e `number`).
- O tamanho da tupla é fixo (neste caso, 2 elementos).

#### Exemplo de uso:
```typescript
let aluno: [string, number] = ["João", 25];
console.log(aluno[0]); // Saída: "João"
console.log(aluno[1]); // Saída: 25 
// aluno[1] = "Maria"; // Erro: Tipo 'string' não é atribuível a 'number'
```

## 2.4. Enum
O `enum` (enumeration) é um tipo especial do TypeScript que permite definir um conjunto de valores nomeados, facilitando a leitura e manutenção do código. Ele é útil quando precisamos representar um conjunto fixo de estados, como status de uma tarefa, níveis de acesso ou tipos de usuário.

### Exemplo de uso:
```typescript
enum Status {
    Pendente,
    EmAndamento,
    Concluido
}
let tarefa: Status = Status.EmAndamento;
```

### Explicação:
- **Declaração do Enum**: Criamos um enum chamado `Status`, que contém três valores:
  - `Pendente` (índice 0)
  - `EmAndamento` (índice 1)
  - `Concluido` (índice 2)
- **Atribuição de Valor**: Criamos uma variável `tarefa` do tipo `Status` e atribuímos a ela o valor `Status.EmAndamento`. Isso significa que a tarefa está atualmente em progresso.

### Benefícios do Enum:
- Substitui números mágicos no código (`0, 1, 2`), tornando-o mais legível.
- Evita erros de digitação ao invés de usar strings (`"pendente"`, `"andamento"`, `"concluido"`).
- Facilita futuras manutenções e ampliações do código.

### Acessando os Valores Numéricos
Por padrão, os valores do enum são indexados automaticamente a partir de `0`. Podemos acessar os índices assim:
```typescript
console.log(Status.Pendente);     // Saída: 0
console.log(Status.EmAndamento);  // Saída: 1
console.log(Status.Concluido);    // Saída: 2
```

Caso prefira, é possível definir manualmente os valores numéricos:
```typescript
enum Status {
    Pendente = 1,
    EmAndamento = 2,
    Concluido = 3
}
```
Agora, `Pendente` vale `1`, `EmAndamento` vale `2` e `Concluido` vale `3`.

### Conclusão
Os `enums` tornam o código mais organizado e semântico, sendo muito úteis para representar estados ou categorias fixas no sistema. 🚀

---

# 3. Funções em TypeScript
As funções em TypeScript são semelhantes às funções em JavaScript, mas com o benefício da tipagem, o que torna o código mais seguro e previsível. Podemos definir os tipos dos parâmetros e do valor de retorno para evitar erros inesperados.

## 3.1. Tipagem em Funções
A tipagem em funções nos permite definir o tipo esperado para cada parâmetro e o tipo do retorno. Isso garante que os argumentos recebidos e o valor retornado sejam do tipo correto.

### Exemplo:
```typescript
function soma(a: number, b: number): number {
    return a + b;
}
console.log(soma(5, 3)); // Saída: 8
```

### Explicação:
- **Parâmetros Tipados**: Os parâmetros `a` e `b` são declarados como `number`, garantindo que apenas números sejam aceitos.
- **Tipagem do Retorno**: Após os parâmetros, `: number` indica que a função sempre retornará um número.

## 3.2. Parâmetros Opcionais e Padrão
Em TypeScript, podemos definir parâmetros opcionais usando `?` e valores padrão para evitar `undefined` ao chamar a função sem alguns argumentos.

### Exemplo:
```typescript
function saudacao(nome: string, idade?: number): string {
    return idade ? `Olá, ${nome}, você tem ${idade} anos!` : `Olá, ${nome}!`;
}
console.log(saudacao("Maria")); // Saída: "Olá, Maria!"
console.log(saudacao("João", 25)); // Saída: "Olá, João, você tem 25 anos!"
```

Podemos definir um valor padrão para um parâmetro, evitando `undefined`:
```typescript
function saudacao(nome: string, idade: number = 18): string {
    return `Olá, ${nome}, você tem ${idade} anos!`;
}
console.log(saudacao("Carlos")); // Saída: "Olá, Carlos, você tem 18 anos!"
```

---

# 4. Orientação a Objetos
O TypeScript permite o uso do paradigma Orientado a Objetos (OO), fornecendo suporte para classes, herança e modificadores de acesso. Isso melhora a estrutura do código, tornando-o mais organizado e reutilizável.

## 4.1. Criando Classes
As classes são a base da Programação Orientada a Objetos e servem como um molde para criar objetos. 

### Exemplo de uma classe `Pessoa`:
```typescript
class Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(): string {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
const pessoa1 = new Pessoa("Carlos", 40);
console.log(pessoa1.apresentar()); // Saída: "Meu nome é Carlos e tenho 40 anos."
```

---

## 4.2. Modificadores de Acesso
Os modificadores de acesso determinam a visibilidade dos atributos e métodos dentro de uma classe.

## Tipos de Modificadores:
> ### public → Acessível de qualquer lugar (padrão se não especificado).
> ### private → Acessível somente dentro da própria classe.
> ### protected → Acessível dentro da classe e de suas subclasses (herança).

### Exemplo:
```typescript
class ContaBancaria {
    private saldo: number;
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    depositar(valor: number): void {
        this.saldo += valor;
    }
    getSaldo(): number {
        return this.saldo;
    }
}
const conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo()); // Saída: 1500
```
🔹 **Vantagens do Uso de `private` e `protected`**
- Protege os dados sensíveis (como saldo bancário).
- Evita modificações não autorizadas, garantindo encapsulamento.
