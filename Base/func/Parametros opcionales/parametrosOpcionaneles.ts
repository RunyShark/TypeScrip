(() => {
  const nombre = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "no lastName"}`;
  };
  console.log(nombre("Pablo"));
})();
