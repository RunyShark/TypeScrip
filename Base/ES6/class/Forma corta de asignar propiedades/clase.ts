(() => {
  class Avenger {
    static age?: Number = 30;
    constructor(
      private name: string,
      public team: string,
      age: number,
      public realName?: string
    ) {
      this.name = name;
      this.team = team;
      this.realName = realName;
      Avenger.age = age;
    }
  }

  const antman: Avenger = new Avenger("MArco", "Polo", 20);
  console.log(Avenger.age);
})();
