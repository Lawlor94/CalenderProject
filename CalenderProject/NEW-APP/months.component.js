System.register(["angular2/core", "./appointmentList.component", "./appointment.component"], function(exports_1, context_1) {
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
    var core_1, appointmentList_component_1, appointment_component_1;
    var Months;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appointmentList_component_1_1) {
                appointmentList_component_1 = appointmentList_component_1_1;
            },
            function (appointment_component_1_1) {
                appointment_component_1 = appointment_component_1_1;
            }],
        execute: function() {
            Months = class Months {
                constructor() {
                    this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                }
                onMonthClick(month) {
                    switch (month) {
                        case 'Jan':
                            console.log("Jan");
                            this.appointments = [
                                new appointment_component_1.Appointment("Doctors Appointment", "10/1/18", "Louise Madden", "Person 1, Person 2"),
                                new appointment_component_1.Appointment("Homework Assignment", "29/1/18", "Jake Stewart", "Jake Stewart"),
                            ];
                            break;
                        default:
                            console.log("No Month Selected");
                            this.appointments = [];
                            break;
                    }
                }
            };
            Months = __decorate([
                core_1.Component({
                    selector: "months",
                    template: `<ul class="list-inline">
                    <li class = "active" *ngFor="#month of months"
                        (click) = "onMonthClick(month)">
                        <a href="#">{{month}}</a>
                    </li>
                    <li class="active">
                        <a href="#">Generate Appointments</a>
                    </li>
                </ul>
                <ul>
                    <li class="active" *ngFor="#apt of appointments">
                        <a>{{apt.date}}</a>
                    </li>
                </ul>
                <appointmentList [appointments]="appointments"></appointmentList>`,
                    directives: [appointmentList_component_1.AppointmentList]
                }), 
                __metadata('design:paramtypes', [])
            ], Months);
            exports_1("Months", Months);
        }
    }
});
//# sourceMappingURL=months.component.js.map