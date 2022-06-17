(() => {
  class Avenger {
    private name: string;
    public team: string;
    public realName?: string;
    static age?: Number = 30;
    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman: Avenger = new Avenger("MArco", "Polo");
  console.log(Avenger.age);
})();
