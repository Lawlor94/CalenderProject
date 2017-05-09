export class Appointment {
    public description: string;
    public date: Date;
    public organizer: string;
    public attendees: string;

    public constructor(description: string, date: Date, organizer: string, attendees: string) {
        this.description = description;
        this.date = date;
        this.organizer = organizer;
        this.attendees = attendees;
    }
}