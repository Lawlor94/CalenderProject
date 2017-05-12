System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var APTS, DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            APTS = [
                { description: "Doctor", date: new Date("1, 14, 2017"), organizer: "Jared Walsh", attendees: "Ms. Gregary, Jonathan Sheehan" },
                { description: "Project Meeting", date: new Date("6, 19, 2017"), organizer: "Jim Berne", attendees: "Robbie Neilson" }
            ];
            DataService = class DataService {
                getAppointments(month) {
                    var num = 0;
                    for (let apt of APTS) {
                        if (apt.date.getMonth() == month) {
                            num++;
                        }
                    }
                    var AptsOfMonth = new Array(num);
                    num = 0;
                    for (let apt of APTS) {
                        if (apt.date.getMonth() == month) {
                            AptsOfMonth[num] = apt;
                            num++;
                        }
                    }
                    return AptsOfMonth;
                }
                addAppointment(apt) {
                    console.log("Called");
                    console.log(apt.description, apt.date, apt.organizer, apt.attendees);
                    APTS[APTS.length] = apt;
                    console.log(APTS[APTS.length - 1].description);
                }
            };
            DataService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], DataService);
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data-service.js.map