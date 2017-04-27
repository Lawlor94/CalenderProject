import { Input, Output, Component } from "angular2/core";
import { Appointment } from "./appointment.component";

@Component({
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

                </div>`
})

export class AppointmentList {

    @Input() appointments: Array<Appointment>;
    @Input() appointment: Appointment;


    showDetails(apt) {
        this.appointment = apt;
    }
}