(() => {
  interface civil {
    name: string;
    age?: number;
    addres?: adrress;
  }

  interface adrress {
    city: string;
    KYC: number;
    realName: Nj;
  }
  interface Nj {
    run: string;
  }

  const cliente: civil = {
    name: "Dario",
    age: 32,
    addres: {
      city: "Xalapa",
      KYC: 20,
      realName: {
        run: "correr",
      },
    },
  };
})();
