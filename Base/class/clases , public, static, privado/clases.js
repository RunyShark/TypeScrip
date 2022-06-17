"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.age = 30;
    const antman = new Avenger("MArco", "Polo");
    console.log(Avenger.age);
})();
