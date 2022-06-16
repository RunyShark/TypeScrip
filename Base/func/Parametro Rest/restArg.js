"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superMan = fullName("Clack", "Jose", "Kent");
    console.log(superMan);
})();
