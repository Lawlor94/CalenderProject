import { Component } from "angular2/core";
import { AppointmentList } from "./appointmentList.component";
import { Appointment } from "./appointment.component";

@Component({
    selector: "months",
    template:   `
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
    directives: [AppointmentList]
})


export class Months {
    public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    public appointments: Array<Appointment>;

    onMonthClick(month) {
        switch (month) {
            case 'Jan':
                this.appointments = [
                    new Appointment("Doctors Appointment", "10/1/18", "Nathan Madden", "Luke Paulson, Robert Paulson"),
                    new Appointment("Homework Assignment", "29/1/18", "Joshua Stewart", "Jake Stewart"),
                ]
                break;
            case 'Feb':
                this.appointments = [
                    new Appointment("Lunch", "10/2/18", "Louise Madden", "Andy Pearson, Luke Brennan"),
                    new Appointment("Holiday", "29/2/18", "Jake Stewart", "Michael Stewart"),
                ]
                break;
            case 'Mar':
                this.appointments = [
                    new Appointment("Brunch", "10/3/18", "Jeffery Ohara", "D. Kelly"),
                    new Appointment("Meeting", "29/3/18", "Johnny Flansburg", "Michael Copenhagen, Andrea Jackson"),
                ]
                break;
            case 'Apr':
                this.appointments = [
                    new Appointment("Breakfast", "1/4/18", "Steve Ohara", "D. Kelly"),
                    new Appointment("Meeting", "29/4/18", "Jack Peters", "Michael Koolage, Andrea Meecham"),
                ]
                break;
            case 'May':
                this.appointments = [
                    new Appointment("Dentist", "1/5/18", "Louise O'Connor", "Liam Denty"),
                    new Appointment("Parent Teacher Meeting", "29/5/18", "Matthew Peters", "Mick Cody, Laura Jackson"),
                    new Appointment("Doctors Appointment", "30/5/18", "Dr. Healy", "")
                ]
                break;
            case 'Jun':
                this.appointments = [
                    new Appointment("Project Due", "17/6/18", "Paul Guy", "Niamh Owen"),
                ]
                break;
            case 'Jul':
                this.appointments = [
                ]
                break;
            case 'Aug':
                this.appointments = [
                    new Appointment("Holiday", "29/8/18", "Jack Jackson", "Niamh Owen, Michael Flannery"),
                    new Appointment("Skype Meeting", "30/8/18", "Bill Nye", "Alex Sheehan, Carl Ray")
                ]
                break;
            case 'Sep':
                this.appointments = [
                    new Appointment("Concert", "4/9/18", "Bill Baily", "Carl Jackson, Vinny Jones"),
                    new Appointment("Package Arrival", "9/9/18", "Mary Watson", "")
                ]
                break;
            case 'Oct':
                this.appointments = [
                    new Appointment("Anivessery", "1/10/18", "Bill Baily", "Carl Jackson, Vinny Jones"),
                    new Appointment("Staff Meeting", "19/10/18", "Rebeccah Bells", "Staff")
                ]
                break;
            case 'Nov':
                this.appointments = [
                    new Appointment("Birthday", "12/11/18", "David Lawlor", "Tanya Cody"),
                    new Appointment("Staff Meeting", "19/10/18", "Rebeccah Bells", "Staff")
                ]
                break;
            case 'Dec':
                this.appointments = [
                    new Appointment("CHRISTMAS :D", "25/12/18", "Jesus I guess?", "Everyone!")
                ]
                break;
            default:
                console.log("No Month Selected");
                this.appointments = [];
                break;

        }
    }

    
}