"use strict";
(() => {
    //* Las clases abstrap sirven como cascaron de otras clases, no sirven para crear instancias
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo a salvo";
        }
    }
    class Villan extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }
    const wolverin = new Xmen("Dario", "Sergio");
    const joker = new Villan("Magneto", "MAgnus");
    console.log(wolverin.salvarMundo());
    console.log(joker.conquistarMundo());
    const printName = (character) => {
        return `${character.name}`;
    };
    printName(wolverin);
})();
