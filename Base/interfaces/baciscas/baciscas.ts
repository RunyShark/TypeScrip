(() => {
  interface Hero {
    name: string;
    age?: number;
    ability: string[];
    getName?: () => string;
  }

  let myCustomVariable: Hero;

  myCustomVariable = {
    name: "Pablo",
    age: 20,
    ability: ["volar"],
  };
})();
