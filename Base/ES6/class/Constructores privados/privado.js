"use strict";
(() => {
    //* Controlar en la que las instancias son ejecutadas
    class Abstrap {
        constructor(name) {
            this.name = name;
        }
        static callAbstrap() {
            if (!Abstrap.instace) {
                Abstrap.instace = new Abstrap("Soy abastrap");
            }
            return Abstrap.instace;
        }
        changueName(newName) {
            this.name = newName;
        }
    }
    const abas = Abstrap.callAbstrap();
    const abas1 = Abstrap.callAbstrap();
    const abas2 = Abstrap.callAbstrap();
    abas.changueName("Marco");
    abas1.changueName("Franco");
    abas2.changueName("Ostias");
    console.log(abas, abas1, abas2);
})();
