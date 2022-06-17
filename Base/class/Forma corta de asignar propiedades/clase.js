"use strict";
(() => {
    class Avenger {
        constructor(name, team, age, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.age = age;
        }
    }
    Avenger.age = 30;
    const antman = new Avenger("MArco", "Polo", 20);
    console.log(Avenger.age);
})();
