namespace Validatios {
  export const ValidatiosText = (text: string): boolean => {
    return text.length > 3 ? false : true;
  };

  export const ValidatiosData = (time: Date): boolean => {
    return isNaN(time.valueOf()) ? false : true;
  };
}
