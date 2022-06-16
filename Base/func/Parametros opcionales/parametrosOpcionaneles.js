"use strict";
(() => {
    const nombre = (firstName, lastName) => {
        return `${firstName} ${lastName || "no lastName"}`;
    };
    console.log(nombre("Pablo"));
})();
