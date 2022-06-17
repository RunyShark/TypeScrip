// Crear interfaces
interface auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
};

const batimovil: auto = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface villanoo {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: villanoo = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: villanoo): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion
interface fun {
  (ciudadanos: string[]): number;
}

const ciudadGotica: fun = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface obligar {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements obligar {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;
  public imprimirBio(): void {}
}
