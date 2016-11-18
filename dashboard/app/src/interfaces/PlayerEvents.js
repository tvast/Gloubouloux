"use strict";
var PlayerEvents;
(function (PlayerEvents) {
    PlayerEvents[PlayerEvents["ChangeSong"] = 0] = "ChangeSong";
    PlayerEvents[PlayerEvents["Play"] = 1] = "Play";
    PlayerEvents[PlayerEvents["PlayStart"] = 2] = "PlayStart";
    PlayerEvents[PlayerEvents["PlayResume"] = 3] = "PlayResume";
    PlayerEvents[PlayerEvents["Pause"] = 4] = "Pause";
    PlayerEvents[PlayerEvents["Finish"] = 5] = "Finish";
    PlayerEvents[PlayerEvents["Seek"] = 6] = "Seek";
    PlayerEvents[PlayerEvents["Seeked"] = 7] = "Seeked";
    PlayerEvents[PlayerEvents["BufferingStart"] = 8] = "BufferingStart";
    PlayerEvents[PlayerEvents["BufferingEnd"] = 9] = "BufferingEnd";
    PlayerEvents[PlayerEvents["AudioError"] = 10] = "AudioError";
    PlayerEvents[PlayerEvents["Time"] = 11] = "Time";
    PlayerEvents[PlayerEvents["NoStreams"] = 12] = "NoStreams";
    PlayerEvents[PlayerEvents["NoProtocol"] = 13] = "NoProtocol";
    PlayerEvents[PlayerEvents["NoConnection"] = 14] = "NoConnection";
})(PlayerEvents || (PlayerEvents = {}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlayerEvents;
//# sourceMappingURL=PlayerEvents.js.map