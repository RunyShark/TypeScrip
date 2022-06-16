(() => {
  type hero = {
    nick: string;
    Iroman: string;
    vison: string;
    activo?: boolean;
    poder: number;
  };
  const avengers: hero = {
    nick: "Samuel L. Jackson",
    Iroman: "Robert Downey Jr.",
    vison: "PAul Bettany",
    activo: true,
    poder: 1000,
  };

  const { poder, vison } = avengers;

  console.log(poder.toFixed(2), vison.toLocaleUpperCase());

  const printAvenger = ({ activo, Iroman, ...resto }: hero): string => {
    return `${avengers.activo} ${avengers.Iroman} ${resto}`;
  };
  console.log(printAvenger(avengers));
})();
