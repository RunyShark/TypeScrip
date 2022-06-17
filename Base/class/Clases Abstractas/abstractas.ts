(() => {
  //* Las clases abstrap sirven como cascaron de otras clases, no sirven para crear instancias
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }
  class Xmen extends Mutante {
    salvarMundo(): string {
      return "Mundo a salvo";
    }
  }
  class Villan extends Mutante {
    conquistarMundo(): string {
      return "Mundo conquistado";
    }
  }
  const wolverin = new Xmen("Dario", "Sergio");
  const joker = new Villan("Magneto", "MAgnus");
  console.log(wolverin.salvarMundo());
  console.log(joker.conquistarMundo());

  const printName = (character: Mutante): string => {
    return `${character.name}`;
  };
  printName(wolverin);
})();
