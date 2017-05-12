using CalenderDb;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace DataService
{
    /// <summary>
    /// Summary description for AppointmentService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class AppointmentService : System.Web.Services.WebService
    {

        [WebMethod]
        public string AddAppointment(string description, DateTime date, string organiser)
        {
            Appointment apt = new Appointment();
            apt.Description = description;
            apt.Date = date;

            //seperate organiser name into first and last name
            string[] stringSeperator = new string[] { " " };
            string[] result;

            result = organiser.Split(stringSeperator, StringSplitOptions.RemoveEmptyEntries);

            apt.Organiser = new Contact();
            apt.Organiser.FirstName = result[0];
            apt.Organiser.LastName = result[1];




            return result[0];
        }
    }
}
