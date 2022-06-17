(() => {
  class Avenger {
    static age?: Number = 30;
    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}

    protected teams(): string {
      return `${this.name} (${this.team})`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      team: string,
      public isMutant: boolean,
      realName?: string
    ) {
      super(name, team, realName);
    }
    getFullnameDesdeExmen() {
      super.teams();
    }
  }

  const wolverine = new Xmen("Pablo", "Azul", true);
  console.log(wolverine);
})();
