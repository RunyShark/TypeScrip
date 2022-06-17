(() => {
  interface civil {
    name: string;
    age?: number;
    addres?: adrress;
    getFullName?(id: number): number;
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
    getFullName(id: number) {
      return 10;
    },
    addres: {
      city: "Xalapa",
      KYC: 20,

      realName: {
        run: "correr",
      },
    },
  };
})();
