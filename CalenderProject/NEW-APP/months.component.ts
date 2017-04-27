import { Component } from "angular2/core";
import { AppointmentList } from "./appointmentList.component";
import { Appointment } from "./appointment.component";

@Component({
    selector: "months",
    template:   `<ul class="list-inline">
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
    directives: [AppointmentList]
})


export class Months {
    public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    public appointments: Array<Appointment>;

    onMonthClick(month) {
        switch (month) {
            case 'Jan':
                console.log("Jan");
                this.appointments = [
                    new Appointment("Doctors Appointment", "10/1/18", "Louise Madden", "Person 1, Person 2"),
                    new Appointment("Homework Assignment", "29/1/18", "Jake Stewart", "Jake Stewart"),
                ]
                break;
            default:
                console.log("No Month Selected");
                this.appointments = [];
                break;

        }
    }

    
}