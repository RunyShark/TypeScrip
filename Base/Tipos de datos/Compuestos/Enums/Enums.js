"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currenteAudio = AudioLevel.min;
    let currenteAudio1 = AudioLevel.max;
    let currenteAudio2 = AudioLevel.medium;
})();
