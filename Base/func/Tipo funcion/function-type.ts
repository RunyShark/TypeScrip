(() => {
  const sumaNumber = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWord = () => `El mundo esta salvado`;

  //? TS logra inferiri correctamente los tipos despues de una asignacion

  // * let myFuncion: (y: number, z: number) => number;
  // * myFuncion = sumaNumber;
  // * console.log(myFuncion(10, 10));

  // * let myFuncion: (y: string) => string;
  // * myFuncion = greet;
  // * console.log(myFuncion("Dario"));

  // *  let myFuncion: () => string;
  // * myFuncion = saveTheWord;
  // * console.log(myFuncion());
})();
