﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace CalenderDb
{
    class Program
    {
        static void Main(string[] args)
        {
            AppointmentManager am = new AppointmentManager();
            am.AddAppointment();

        }
    }
}
