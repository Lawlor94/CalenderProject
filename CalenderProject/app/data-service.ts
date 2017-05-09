import { Appointment } from './appointment';

import { Injectable } from 'angular2/core';

const APTS: Appointment[] = [
    { description: "Doctor", date: new Date("1, 14, 2017"), organizer: "Jared Walsh", attendees: "Ms. Gregary, Jonathan Sheehan" },
    { description: "Project Meeting", date: new Date("6, 19, 2017"), organizer: "Jim Berne", attendees: "Robbie Neilson" }
];

@Injectable()
export class DataService {
    public getAppointments(month: number): Appointment[] {

        var num = 0;

        for (let apt of APTS) {
            if (apt.date.getMonth() == month) {
                num++;
            }
        }

        var AptsOfMonth = new Array(num);

        num = 0;
        for (let apt of APTS) {
            if (apt.date.getMonth() == month) {
                AptsOfMonth[num] = apt;
                num++;
            }
        }

        return AptsOfMonth;

    }

    public addAppointment(apt: Appointment) {
        console.log("Called");
        console.log(apt.description, apt.date, apt.organizer, apt.attendees);
        APTS[APTS.length] = apt;
        console.log(APTS[APTS.length-1].description);
    }
}