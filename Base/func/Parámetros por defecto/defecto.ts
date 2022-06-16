(() => {
  const fullName = (
    name: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${name} ${lastName || "No lastName"}`.toLocaleUpperCase();
    } else {
      return `${name} ${lastName || "No lastName"}`;
    }
  };

  console.log(fullName("Pablo", "Marcos", true));
})();
