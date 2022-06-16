"use strict";
(() => {
    //type espesidico
    let person = {
        name: "Dario",
        age: 22,
        ability: ["Aprender", "Fuerza"],
    };
    person = {
        name: "pablo",
        age: 20,
        ability: ["Correr"],
        getName() {
            return this.name;
        },
    };
})();
