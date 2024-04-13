
// Definição da classe Heroi 
class Heroi {
    // Construtor da classe, recebe nome, idade e tipo
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar da classe Heroi    
    atacar() {
        let ataque;

        // Estrutura switch para definir o ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }
        // Exibe a mensagem completa do ataque, concatenando o tipo e o nome do herói e ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Gandalf', 1000, 'mago');
heroi1.atacar(); // O mago Gandalf atacou usando magia

const heroi2 = new Heroi('Conan', 40, 'guerreiro');
heroi2.atacar(); // O guerreiro Conan atacou usando espada

const heroi3 = new Heroi('Bruce Lee', 32, 'monge');
heroi3.atacar(); // O monge Bruce Lee atacou usando artes marciais

const heroi4 = new Heroi('Hattori Hanzo', 50, 'ninja');
heroi4.atacar(); // O ninja Hattori Hanzo atacou usando shuriken

console.log('Todos os guerreiros atacaram com sucesso!');