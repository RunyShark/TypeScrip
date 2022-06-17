"use strict";
var Validatios;
(function (Validatios) {
    Validatios.ValidatiosText = (text) => {
        return text.length > 3 ? false : true;
    };
    Validatios.ValidatiosData = (time) => {
        return isNaN(time.valueOf()) ? false : true;
    };
})(Validatios || (Validatios = {}));
