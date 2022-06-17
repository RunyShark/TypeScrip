import { number } from "prop-types";

(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let fune: addTwoNumbers;

  fune = (a: number, b: number) => {
    return 10;
  };
})();
