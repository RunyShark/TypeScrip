"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        Iroman: "Robert Downey Jr.",
        vison: "PAul Bettany",
        activo: true,
        poder: 1000,
    };
    const { poder, vison } = avengers;
    console.log(poder.toFixed(2), vison.toLocaleUpperCase());
    const printAvenger = (_a) => {
        var { activo, Iroman } = _a, resto = __rest(_a, ["activo", "Iroman"]);
        return `${avengers.activo} ${avengers.Iroman} ${resto}`;
    };
    console.log(printAvenger(avengers));
})();
