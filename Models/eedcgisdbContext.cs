using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DashboardApp.Models
{
    public partial class eedcgisdbContext : DbContext
    {
        public eedcgisdbContext()
        {
        }

        public eedcgisdbContext(DbContextOptions<eedcgisdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<IncidenceReports> IncidenceReports { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Server=198.71.57.16;Port=5432;Database=eedcgisdb;User Id=cloud_user; Password=#dbG!S2@17; timeout=60");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasPostgresExtension("postgis");

            modelBuilder.Entity<IncidenceReports>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("incidence_reports", "sde");

                entity.Property(e => e.CapturedIssueDate)
                    .HasColumnName("captured_issue_date")
                    .HasColumnType("character varying");

                entity.Property(e => e.Category)
                    .HasColumnName("category")
                    .HasColumnType("character varying");

                entity.Property(e => e.CategorySubType)
                    .HasColumnName("category_sub_type")
                    .HasColumnType("character varying");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.DistrictName)
                    .HasColumnName("district_name")
                    .HasColumnType("character varying");

                entity.Property(e => e.DssName)
                    .HasColumnName("dss_name")
                    .HasColumnType("character varying");

                entity.Property(e => e.FeederName)
                    .HasColumnName("feeder_name")
                    .HasColumnType("character varying");

                entity.Property(e => e.IncidenceId)
                    .HasColumnName("incidence_id")
                    .HasColumnType("character varying");

                entity.Property(e => e.LatY)
                    .HasColumnName("lat_y")
                    .HasColumnType("character varying");

                entity.Property(e => e.LongX)
                    .HasColumnName("long_x")
                    .HasColumnType("character varying");

                entity.Property(e => e.ReporterFullname)
                    .HasColumnName("reporter_fullname")
                    .HasColumnType("character varying");

                entity.Property(e => e.ReporterPhoneNo)
                    .HasColumnName("reporter_phone_no")
                    .HasColumnType("character varying");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
