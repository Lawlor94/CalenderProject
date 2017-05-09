System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Appointment;
    return {
        setters:[],
        execute: function() {
            class Appointment {
                constructor(description, date, organizer, attendees) {
                    this.description = description;
                    this.date = date;
                    this.organizer = organizer;
                    this.attendees = attendees;
                }
            }
            exports_1("Appointment", Appointment);
        }
    }
});
//# sourceMappingURL=appointment.js.map