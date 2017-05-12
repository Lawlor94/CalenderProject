System.register(["angular2/core", "./appointmentList.component", "./data-service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, appointmentList_component_1, data_service_1, Months;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appointmentList_component_1_1) {
                appointmentList_component_1 = appointmentList_component_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }
        ],
        execute: function () {
            Months = class Months {
                constructor(dataService) {
                    this.dataService = dataService;
                    this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                }
                onMonthClick(month) {
                    var monthNum = this.months.indexOf(month);
                    this.apts = this.dataService.getAppointments(monthNum);
                    this.appointments = this.apts;
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
                    directives: [appointmentList_component_1.AppointmentList],
                    providers: [data_service_1.DataService]
                }),
                __metadata("design:paramtypes", [data_service_1.DataService])
            ], Months);
            exports_1("Months", Months);
        }
    };
});
//# sourceMappingURL=months.component.js.map