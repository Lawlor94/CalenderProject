import { Component } from "angular2/core";
import { AppointmentList } from "./appointmentList.component";
import { Appointment } from "./appointment";
import { DataService } from "./data-service";

@Component({
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
    directives: [AppointmentList],
    providers: [DataService]
})


export class Months {
    public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    public appointments: Array<Appointment>;

    constructor(private dataService: DataService) { }

    apts: Appointment[];

    onMonthClick(month) {
        var monthNum = this.months.indexOf(month);
        this.apts = this.dataService.getAppointments(monthNum);
        this.appointments = this.apts;
    }
}