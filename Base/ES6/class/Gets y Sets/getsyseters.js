"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        teams() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.age = 30;
    class Xmen extends Avenger {
        constructor(name, team, isMutant, realName) {
            super(name, team, realName);
            this.isMutant = isMutant;
        }
        getFullnameDesdeExmen() {
            super.teams();
        }
    }
    const wolverine = new Xmen("Pablo", "Azul", true);
    console.log(wolverine);
})();
