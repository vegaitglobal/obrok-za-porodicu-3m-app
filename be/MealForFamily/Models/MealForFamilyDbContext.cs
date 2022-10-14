using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MealForFamily.Models
{
    public partial class MealForFamilyDbContext : DbContext
    {
        public MealForFamilyDbContext()
        {
        }

        public MealForFamilyDbContext(DbContextOptions<MealForFamilyDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Contact> Contacts { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql(Environment.GetEnvironmentVariable("DB_CONNECTION_STRING"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>(entity =>
            {
                entity.ToTable("contact");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Createdat)
                    .HasMaxLength(50)
                    .HasColumnName("createdat");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Isdeleted).HasColumnName("isdeleted");

                entity.Property(e => e.Phonenumber)
                    .HasMaxLength(50)
                    .HasColumnName("phonenumber");

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .HasColumnName("title");

                entity.Property(e => e.Updatedat)
                    .HasMaxLength(50)
                    .HasColumnName("updatedat");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
