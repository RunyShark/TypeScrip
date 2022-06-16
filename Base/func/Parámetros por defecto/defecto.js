"use strict";
(() => {
    const fullName = (name, lastName, upper = false) => {
        if (upper) {
            return `${name} ${lastName || "No lastName"}`.toLocaleUpperCase();
        }
        else {
            return `${name} ${lastName || "No lastName"}`;
        }
    };
    console.log(fullName("Pablo", "Marcos", true));
})();
