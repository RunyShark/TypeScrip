(() => {
  //type espesidico
  //* Sirve para poner reglas, no se traspila a Js
  type Hero = {
    name: string;
    age?: number;
    ability: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Dario";

  myCustomVariable = "hola";

  myCustomVariable = 20;

  myCustomVariable = {
    name: "Pablo",
    age: 20,
    ability: ["volar"],
  };
})();
