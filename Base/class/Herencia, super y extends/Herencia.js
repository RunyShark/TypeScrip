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
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen("Pablo", "Azul", true);
    wolverine.fullName = "Marco";
    console.log(wolverine.fullName);
})();
