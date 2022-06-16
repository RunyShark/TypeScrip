(() => {
  const averguerArra: [string, string, string, boolean?] = [
    "Cap.America",
    "Irman",
    "Hulk",
  ];

  const iroman: string = averguerArra[1];
  console.log({ iroman });

  // *destructuracion de arrays
  const [, Joni] = averguerArra;
  console.log(Joni);
})();
