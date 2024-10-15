
 class Heroi { //  Nome da classe
        constructor(nome, idade, tipo) { //aqui é o construtor da classe.
            this.nome = nome; // atributos da classe
            this.idade = idade; // atributos da classe
            this.tipo = tipo; // atributos da classe
            
        }
        
        atacar() {

            let ataque;
    
            // determinar o tipo de ataque
            switch (this.tipo) {
                case "mago":
                    ataque = "magia";
                    break;
                case "guerreiro":
                    ataque = "espada";
                    break;
                case "monge":
                    ataque = "artes marciais";
                    break;
                case "ninja":
                    ataque = "shuriken";
                    break;
                default:
                    ataque = "ataque desconhecido";
            }
    
            // Exibe a mensagem de ataque
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        }

}

// Aqui vamos instância um objeto da classe heroi. 
// Criando instâncias da classe Heroi
const heroi1 = new Heroi("Gandalf", 300, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("Li", 25, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Shadow", 30, "ninja");
heroi4.atacar();