"use strict";
var Events = (function () {
    function Events() {
    }
    Events.ChangeSong = 1;
    Events.Play = 2;
    Events.PlayStart = 3;
    Events.PlayResume = 4;
    Events.Pause = 5;
    Events.Finish = 6;
    Events.Seek = 7;
    Events.Seeked = 8;
    Events.BufferingStart = 9;
    Events.BufferingEnd = 10;
    Events.AudioError = 11;
    Events.Time = 12;
    Events.NoStreams = 13;
    Events.NoProtocol = 14;
    Events.NoConnection = 15;
    Events.Volume = 16;
    return Events;
}());
exports.Events = Events;
//# sourceMappingURL=Events.js.map