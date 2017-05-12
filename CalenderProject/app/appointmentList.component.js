System.register(["angular2/core", "./appointment", "./data-service"], function(exports_1, context_1) {
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
    var core_1, appointment_1, data_service_1;
    var AppointmentList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appointment_1_1) {
                appointment_1 = appointment_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            AppointmentList = class AppointmentList {
                constructor(dataService) {
                    this.dataService = dataService;
                    this.show = false;
                }
                showDetails(apt) {
                    this.appointment = apt;
                }
                add(desc, date, organizer, attendees) {
                    var aptDate = new Date(date);
                    var apt = new appointment_1.Appointment(desc, aptDate, organizer, attendees);
                    this.dataService.addAppointment(apt);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Array)
            ], AppointmentList.prototype, "appointments", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', appointment_1.Appointment)
            ], AppointmentList.prototype, "appointment", void 0);
            AppointmentList = __decorate([
                core_1.Component({
                    selector: "appointmentList",
                    template: ` <div id="appointment-list">
                    Appointments:
                    <ul>
                        <li *ngFor="#apt of appointments" class = "clean-lists">
                            <a href="#" (click) = "showDetails(apt)">{{apt.description}}</a>
                        </li>
                    </ul>
                </div>
                <div id="appointment-details">
                    Details:
                   <ul *ngIf="appointment" class="clean-lists">
                        <li class="cleanLists">{{appointment.description}}</li> 
                        <li class="cleanLists">{{appointment.date}}</li>
                        <li class="cleanLists">{{appointment.organizer}}</li>
                        <li class="cleanLists">{{appointment.attendees}}</li>
                   </ul>
                    
                </div>
                <button (click)="show = !show">{{show ? 'Hide' : 'Add'}}</button>
                <div *ngIf="show">
                        <label>Description:</label><br/><input #desc/> <br />
                        <label>Date</label><br/><input #date/> <br />
                        <label>Organizer</label><br/><input #organizer/> <br />
                        <label>Attendees</label><br/><input #attendees/> <br />
                    <button (click)="add(desc.value, date.value, organizer.value, attendees.value);">
                        Add
                    </button>
                </div>`,
                    styles: [`
    `]
                }), 
                __metadata('design:paramtypes', [data_service_1.DataService])
            ], AppointmentList);
            exports_1("AppointmentList", AppointmentList);
        }
    }
});
//# sourceMappingURL=appointmentList.component.js.map