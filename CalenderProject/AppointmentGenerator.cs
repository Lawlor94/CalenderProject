using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

public class AppointmentGenerator
{
    static public Appointment[] getAppointmentsInMonth(string month)
    {

        Appointment[] apts = null;

        switch (month)
        {
            case "Jan":
                apts = new Appointment[] {
                    new Appointment("homework assignment", "29/1/18", "joshua stewart", "jake stewart"),
                    new Appointment("exam", "12/1/12", "Lena Bakewell", "Joshua Baker, Hannah Jameson")
                };
                return apts;
            default:
                break;
        }

        return apts;
    }
}