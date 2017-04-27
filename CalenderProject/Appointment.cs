using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;



public class Appointment
{
    public string description;
    public string date;
    public string organizer;
    public string attendees;

    public Appointment(string desc, string date, string organizer, string attendees)
    {
        this.description = desc;
        this.date = date;
        this.organizer = organizer;
        this.attendees = attendees;
    }

    public Appointment()
    {

    }
}