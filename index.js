class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch(this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "atacou de forma indefinida";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Testando os heróis
  const heroi1 = new Heroi("Gandalf", 80, "mago");
  const heroi2 = new Heroi("Aragorn", 40, "guerreiro");
  const heroi3 = new Heroi("Kenshin", 35, "monge");
  const heroi4 = new Heroi("Hanzo", 25, "ninja");
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
  