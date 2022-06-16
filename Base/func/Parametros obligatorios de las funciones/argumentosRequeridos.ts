(() => {
  const nombre = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };
  console.log(nombre("Pablo", "Morsa"));
})();
