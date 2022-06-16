(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(" ")}`;
  };
  const superMan = fullName("Clack", "Jose", "Kent");
  console.log(superMan);
})();
