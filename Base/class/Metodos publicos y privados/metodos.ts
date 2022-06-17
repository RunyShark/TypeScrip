(() => {
  class Avenger {
    static age?: Number = 30;
    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}

    public bio(): string {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("MArco", "Polo");
  console.log(antman.bio());
})();
