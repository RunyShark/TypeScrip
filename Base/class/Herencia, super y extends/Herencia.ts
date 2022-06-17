(() => {
  class Avenger {
    static age?: Number = 30;
    constructor(
      public name: string,
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

    get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      this.name = name;
    }
  }

  const wolverine = new Xmen("Pablo", "Azul", true);
  wolverine.fullName = "Marco";
  console.log(wolverine.fullName);
})();
