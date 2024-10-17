// Classe Heroi que contém as propriedades e o método atacar
class Heroi {
    constructor(nome, idade, tipo) {// costrutor da class
      this.nome = nome; // atributo nome
      this.idade = idade;// atributo idade
      this.tipo = tipo; // atributo tipo
    }
  // método atacar
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou ataque desconhecido';
      }
      return `O ${this.tipo} ${this.nome} atacou,  ${ataque}`;
    }
  }
  
  // Função para criar o herói e exibir o resultado do ataque
  document.getElementById('criarHeroi').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tipo = document.getElementById('tipo').value;
  
    if (nome === '' || idade === '') {
      document.getElementById('resultado').textContent = "Por favor, preencha todos os campos!";
      return;
    }
  
    const heroi = new Heroi(nome, idade, tipo);
    const resultado = heroi.atacar();
  
    document.getElementById('resultado').textContent = resultado;
  });
  