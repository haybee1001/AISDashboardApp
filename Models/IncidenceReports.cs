using System;
using System.Collections.Generic;

namespace DashboardApp.Models
{
    public partial class IncidenceReports
    {
        public string IncidenceId { get; set; }
        public string ReporterFullname { get; set; }
        public string ReporterPhoneNo { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string CategorySubType { get; set; }
        public string LongX { get; set; }
        public string LatY { get; set; }
        public string CapturedIssueDate { get; set; }
        public string DistrictName { get; set; }
        public string FeederName { get; set; }
        public string DssName { get; set; }
    }
}
