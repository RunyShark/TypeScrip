(() => {
  //type espesidico
  //* Sirve para poner reglas, no se traspila a Js
  type Hero = {
    name: string;
    age?: number;
    ability: string[];
    getName?: () => string;
  };

  let person: Hero = {
    name: "Dario",
    age: 22,
    ability: ["Aprender", "Fuerza"],
  };
  let person2: Hero = {
    name: "Ximena",
    age: 21,
    ability: ["Aprender", "Fuerza"],
    getName() {
      return this.name;
    },
  };
})();
