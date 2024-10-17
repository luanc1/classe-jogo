# 🎮 Jogo de Aventura com Classes em JavaScript

## 🛠 O que eu fiz aqui

Neste projeto, criei uma classe simples para representar heróis em uma aventura, utilizando JavaScript. Cada herói tem suas próprias características (nome, idade, tipo) e um método de ataque específico, que varia de acordo com o tipo de herói.

### 💡 O que utilizei:

- Variáveis para armazenar informações dos heróis.
- Condicionais para determinar o comportamento do método de ataque.
- Classes e objetos para representar os heróis.
- Funções dentro da classe para definir o comportamento do herói, como atacar.

## 🎯 Objetivo do código

Implementei uma classe chamada `Heroi` que representa um herói genérico, com as seguintes propriedades:

- **nome**: Nome do herói.
- **idade**: Idade do herói.
- **tipo**: Tipo do herói (pode ser guerreiro, mago, monge ou ninja).

A classe também contém um método chamado **atacar**, que exibe uma mensagem de ataque com base no tipo de herói.

### 🛡 Propriedades do herói:

- **nome**: Nome dado ao herói quando ele é criado.
- **idade**: Idade atribuída ao herói.
- **tipo**: Tipo de herói, como guerreiro, mago, monge ou ninja. Isso define o ataque que o herói vai usar.

### ⚔️ Método atacar:

O método `atacar` exibe uma mensagem com o tipo de ataque do herói. Ele usa condicionais (`if`/`else`) para escolher o ataque certo com base no tipo:

- Se o herói for **mago**, o ataque será: "usou magia".
- Se for **guerreiro**, o ataque será: "usou espada".
- Se for **monge**, o ataque será: "usou artes marciais".
- Se for **ninja**, o ataque será: "usou shuriken".

O formato da mensagem é:

```javascript
"O {tipo} atacou usando {ataque}"
