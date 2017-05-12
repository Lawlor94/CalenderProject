﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace CalenderApp.Data
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new AppointmentContext())
            {
                // create and save a new appointment
                Console.WriteLine("Enter an Appointment Description: ");
                var desc = Console.ReadLine();

                // enter date
                Console.WriteLine("APPOINTMENT DATE");
                Console.Write("Enter Day (dd): ");
                int dd = Convert.ToInt32(Console.ReadLine());
                Console.Write("Enter Month (mm): ");
                int mm = Convert.ToInt32(Console.ReadLine());
                Console.Write("Enter Year (yyyy): ");
                int yyyy = Convert.ToInt32(Console.ReadLine());
                DateTime date = new DateTime(yyyy, mm, dd);

                // enter organiser name
                Console.WriteLine("ORGANISER NAME");
                Console.WriteLine("First Name: ");
                var fname = Console.ReadLine();
                Console.WriteLine("Last Name: ");
                var lname = Console.ReadLine();
                Contact organiser = new Contact { FirstName = fname, LastName = lname };

                //construct appointment
                var appointment = new Appointment { Description = desc, Date = date, Organiser = organiser };
                db.Appointments.Add(appointment);
                db.SaveChanges();

                //display all appointments from db
                var query = from b in db.Appointments
                            orderby b.Date
                            select b;

                Console.WriteLine("All Appointments in DB: ");
                Console.WriteLine();

                foreach (var item in query)
                {
                    Console.WriteLine(item.Description + ", "
                        + item.Date.ToShortDateString());
                }

                Console.WriteLine();
                Console.WriteLine("Press any key to exit");
                Console.ReadKey();

            }

        }
    }
}