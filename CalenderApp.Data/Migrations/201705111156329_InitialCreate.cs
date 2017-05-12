namespace CalenderApp.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Appointments",
                c => new
                    {
                        AppointmentId = c.Int(nullable: false, identity: true),
                        Description = c.String(),
                        Date = c.DateTime(nullable: false),
                        Organiser_ContactId = c.Int(),
                    })
                .PrimaryKey(t => t.AppointmentId)
                .ForeignKey("dbo.Contacts", t => t.Organiser_ContactId)
                .Index(t => t.Organiser_ContactId);
            
            CreateTable(
                "dbo.Contacts",
                c => new
                    {
                        ContactId = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        AppointmentId = c.Int(),
                        Appointment_AppointmentId = c.Int(),
                        Appointment_AppointmentId1 = c.Int(),
                    })
                .PrimaryKey(t => t.ContactId)
                .ForeignKey("dbo.Appointments", t => t.Appointment_AppointmentId)
                .ForeignKey("dbo.Appointments", t => t.Appointment_AppointmentId1)
                .Index(t => t.Appointment_AppointmentId)
                .Index(t => t.Appointment_AppointmentId1);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Appointments", "Organiser_ContactId", "dbo.Contacts");
            DropForeignKey("dbo.Contacts", "Appointment_AppointmentId1", "dbo.Appointments");
            DropForeignKey("dbo.Contacts", "Appointment_AppointmentId", "dbo.Appointments");
            DropIndex("dbo.Contacts", new[] { "Appointment_AppointmentId1" });
            DropIndex("dbo.Contacts", new[] { "Appointment_AppointmentId" });
            DropIndex("dbo.Appointments", new[] { "Organiser_ContactId" });
            DropTable("dbo.Contacts");
            DropTable("dbo.Appointments");
        }
    }
}
