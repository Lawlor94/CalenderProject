import { Input, Output, Component } from "angular2/core";
import { Appointment } from "./appointment";
import { DataService } from "./data-service";

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
                    
                </div>
                <button (click)="show = !show">{{show ? 'Hide' : 'Add'}}</button>
                <div *ngIf="show">
                        <label>Description:</label><br/><input #desc/> <br />
                        <label>Date</label><br/><input #date/> <br />
                        <label>Organizer</label><br/><input #organizer/> <br />
                        <label>Attendees</label><br/><input #attendees/> <br />
                    <button id="innerAddBtn" (click)="add(desc.value, date.value, organizer.value, attendees.value);">
                        Add
                    </button>
                </div>`,
    styles: [`
        .rightAptInputs{
        }
        .floatLeftInputs{
       }
        #innerAddBtn{
            
        }
    `]
})

export class AppointmentList {

    show: boolean = false;

    @Input() appointments: Array<Appointment>;
    @Input() appointment: Appointment;

    apts: Appointment[];


    showDetails(apt) {
        this.appointment = apt;
    }

   constructor(private dataService: DataService) { }


    add(desc: string, date: string, organizer: string, attendees: string) {

        var aptDate = new Date(date);

        var apt = new Appointment(desc, aptDate, organizer, attendees);

        this.dataService.addAppointment(apt);
    }

}

