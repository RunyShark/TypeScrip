(() => {
  //type espesidico
  let person: {
    name: string;
    age?: number;
    ability: string[];
    getName?: () => string;
  } = {
    name: "Dario",
    age: 22,
    ability: ["Aprender", "Fuerza"],
  };
})();
