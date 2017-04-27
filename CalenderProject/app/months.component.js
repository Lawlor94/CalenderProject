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
                            this.appointments = [
                                new appointment_component_1.Appointment("Doctors Appointment", "10/1/18", "Nathan Madden", "Luke Paulson, Robert Paulson"),
                                new appointment_component_1.Appointment("Homework Assignment", "29/1/18", "Joshua Stewart", "Jake Stewart"),
                            ];
                            break;
                        case 'Feb':
                            this.appointments = [
                                new appointment_component_1.Appointment("Lunch", "10/2/18", "Louise Madden", "Andy Pearson, Luke Brennan"),
                                new appointment_component_1.Appointment("Holiday", "29/2/18", "Jake Stewart", "Michael Stewart"),
                            ];
                            break;
                        case 'Mar':
                            this.appointments = [
                                new appointment_component_1.Appointment("Brunch", "10/3/18", "Jeffery Ohara", "D. Kelly"),
                                new appointment_component_1.Appointment("Meeting", "29/3/18", "Johnny Flansburg", "Michael Copenhagen, Andrea Jackson"),
                            ];
                            break;
                        case 'Apr':
                            this.appointments = [
                                new appointment_component_1.Appointment("Breakfast", "1/4/18", "Steve Ohara", "D. Kelly"),
                                new appointment_component_1.Appointment("Meeting", "29/4/18", "Jack Peters", "Michael Koolage, Andrea Meecham"),
                            ];
                            break;
                        case 'May':
                            this.appointments = [
                                new appointment_component_1.Appointment("Dentist", "1/5/18", "Louise O'Connor", "Liam Denty"),
                                new appointment_component_1.Appointment("Parent Teacher Meeting", "29/5/18", "Matthew Peters", "Mick Cody, Laura Jackson"),
                                new appointment_component_1.Appointment("Doctors Appointment", "30/5/18", "Dr. Healy", "")
                            ];
                            break;
                        case 'Jun':
                            this.appointments = [
                                new appointment_component_1.Appointment("Project Due", "17/6/18", "Paul Guy", "Niamh Owen"),
                            ];
                            break;
                        case 'Jul':
                            this.appointments = [];
                            break;
                        case 'Aug':
                            this.appointments = [
                                new appointment_component_1.Appointment("Holiday", "29/8/18", "Jack Jackson", "Niamh Owen, Michael Flannery"),
                                new appointment_component_1.Appointment("Skype Meeting", "30/8/18", "Bill Nye", "Alex Sheehan, Carl Ray")
                            ];
                            break;
                        case 'Sep':
                            this.appointments = [
                                new appointment_component_1.Appointment("Concert", "4/9/18", "Bill Baily", "Carl Jackson, Vinny Jones"),
                                new appointment_component_1.Appointment("Package Arrival", "9/9/18", "Mary Watson", "")
                            ];
                            break;
                        case 'Oct':
                            this.appointments = [
                                new appointment_component_1.Appointment("Anivessery", "1/10/18", "Bill Baily", "Carl Jackson, Vinny Jones"),
                                new appointment_component_1.Appointment("Staff Meeting", "19/10/18", "Rebeccah Bells", "Staff")
                            ];
                            break;
                        case 'Nov':
                            this.appointments = [
                                new appointment_component_1.Appointment("Birthday", "12/11/18", "David Lawlor", "Tanya Cody"),
                                new appointment_component_1.Appointment("Staff Meeting", "19/10/18", "Rebeccah Bells", "Staff")
                            ];
                            break;
                        case 'Dec':
                            this.appointments = [
                                new appointment_component_1.Appointment("CHRISTMAS :D", "25/12/18", "Jesus I guess?", "Everyone!")
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
                    template: `
                <div id="months">
                <ul class="list-inline">
                    <li class = "active" *ngFor="#month of months"
                        (click) = "onMonthClick(month)">
                        <a href="#">{{month}}</a>
                    </li>
                </ul>
                <ul>

                </ul>
                <appointmentList [appointments]="appointments"></appointmentList>
                </div>`,
                    directives: [appointmentList_component_1.AppointmentList]
                }), 
                __metadata('design:paramtypes', [])
            ], Months);
            exports_1("Months", Months);
        }
    }
});
//# sourceMappingURL=months.component.js.map