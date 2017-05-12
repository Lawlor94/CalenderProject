using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalenderDb
{
    public class Appointment
    {
        public int AppointmentId { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public Contact Organiser { get; set; }

        public virtual List<Contact> Attendees { get; set; }
    }
}
