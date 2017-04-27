import { Input, Output, Component } from "angular2/core";
import { Appointment } from "./appointment.component";

@Component({
    selector: "appointmentList",
    template: ` <ul>
                    <li *ngFor="#apt of appointments">
                        <a>{{apt.date}}</a>
                    </li>
                </ul>`
})

export class AppointmentList {

    @Input() appointments: Array<Appointment>;
    
    
}