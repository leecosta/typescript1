//simplificar código de js
function soma(a: number, b: number) {
  return a + b;
}

//
//interfaces
interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  executarRugido(alturaEmDecibeis: number): void;
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: "pequeno" | "medio" | "grande";
}

const animal: IAnimal = {
  nome: "Elefante",
  tipo: "aquático",
  executarRugido: (alturaEmDecibeis) => `${alturaEmDecibeis}dB`,
  domestico: false,
};

const felino: IFelino = {
  nome: "Leão",
  tipo: "terrestre",
  visaoNoturna: true,
  executarRugido: (alturaEmDecibeis) => `${alturaEmDecibeis}dB`,
  domestico: false,
};

//types
//serve para juntar interfaces
// type IDomestico = IFelino & ICanino;
//ou escolher apenas uma das interfaces
type IDomestico = IFelino | ICanino;

const animal2: IDomestico = {
  domestico: true,
  nome: "cachorro",
  porte: "medio",
  tipo: "terrestre",
  executarRugido: (alturaEmDecibeis) => `${alturaEmDecibeis}dB`,
};

//
// Generic Types
//<T> é pq o valor pode ser de qualquer tipo
function adicionaApendiceALista<T>(array: any[], valor: T) {
  return array.map((item) => item + valor);
}

adicionaApendiceALista([1, 2, 3], 1);

//
// interface IUsuario {
//   id: string;
//   email: string;
// }

// interface IAdmin extends IUsuario {
//   cargo: "gerente" | "coordenador" | "supervisor";
// }

// function redirecione(usuario: IUsuario | IAdmin) {
//   if ("cargo" in usuario) {
//     // redirecionar para área de administração
//   }
//   // redirecionar para área do usuário
// }

//ou podemos transformar o item cargo em opcional
interface IUsuario {
  id: string;
  email: string;
  cargo?: "gerente" | "coordenador" | "supervisor" | "funcionario"; //opcional
}

function redirecione(usuario: IUsuario) {
  if (usuario.cargo) {
    // redirecionar para área de administração
  }
  // redirecionar para área do usuário
}

//
interface Cachorro {
  nome: string;
  idade: number;
  parqueFavorito?: string;
}

//Deixar os valores apenas de leitura (não consegue alterar)
type CachorroSomenteLeitura = {
  +readonly [K in keyof Cachorro]-?: Cachorro[K];
  //-? remove os valores opcionais
};

class MeuCachorro implements CachorroSomenteLeitura {
  nome;
  idade;
  parqueFavorito;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro("Apolo", 14);

//
interface Pessoa {
  nome: string;
  idade: number;
  nacionalidade: string;
}

//A opção nacionalidade não é mais necessária
interface Brasileiro extends Omit<Pessoa, "nacionalidade"> {}

const brasileiro: Brasileiro = {
  nome: "a",
  idade: 1,
};
