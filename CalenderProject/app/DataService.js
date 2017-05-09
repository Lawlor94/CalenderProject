System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var APTS, DataService;
    return {
        setters:[],
        execute: function() {
            APTS = [
                { description: "Doctor", date: new Date(2017, 2, 5), organizer: "Jared Walsh", attendees: "Ms. Gregary, Jonathan Sheehan" },
                { description: "Project Meeting", date: new Date(2017, 12 / 1), organizer: "Jim Berne", attendees: "Robbie Neilson" }
            ];
            class DataService {
            }
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=DataService.js.map