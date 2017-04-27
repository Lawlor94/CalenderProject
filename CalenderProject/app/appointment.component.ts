import { Component } from "angular2/core";

@Component({
    selector: "appointment",
    template: "Test"
})

export class Appointment{
    public description: string;
    public date: string;
    public organizer: string;
    public attendees: string;

    public constructor(description: string, date: string, organizer: string, attendees: string) {
        this.description = description;
        this.date = date;
        this.organizer = organizer;
        this.attendees = attendees;
    }
}