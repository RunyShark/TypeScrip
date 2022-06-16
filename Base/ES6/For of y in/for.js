"use strict";
(() => {
    const iroman = {
        name: "Tony Start",
        weapon: "M107",
    };
    const CapAmerica = {
        name: "Cap",
        weapon: "Escudo",
    };
    const Hulk = {
        name: "Verde",
        weapon: "Convertirse en ronny coleman cuando se enoja",
    };
    const Avengers = [iroman, CapAmerica, Hulk];
    for (const avenger of Avengers) {
        console.log(avenger.name);
    }
    for (const key in Hulk) {
        console.log(key);
    }
})();
