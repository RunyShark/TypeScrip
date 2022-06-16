(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const iroman: Avenger = {
    name: "Tony Start",
    weapon: "M107",
  };

  const CapAmerica: Avenger = {
    name: "Cap",
    weapon: "Escudo",
  };

  const Hulk: Avenger = {
    name: "Verde",
    weapon: "Convertirse en ronny coleman cuando se enoja",
  };

  const Avengers: Avenger[] = [iroman, CapAmerica, Hulk];

  for (const avenger of Avengers) {
    console.log(avenger.name);
  }

  for (const key in Hulk) {
    console.log(key);
  }
})();
