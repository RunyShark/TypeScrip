"use strict";
(() => {
    let person = {
        name: "Dario",
        age: 22,
        ability: ["Aprender", "Fuerza"],
    };
    let person2 = {
        name: "Ximena",
        age: 21,
        ability: ["Aprender", "Fuerza"],
        getName() {
            return this.name;
        },
    };
})();
