"use strict";
(() => {
    const hero = ["Capitan America", 100];
    //hero[0] = 30 Error por que espera que en la posicion 1 llegue un string y a si pasa con la posicion 2
    hero[0] = "Hola";
    hero[1] = 20;
})();
