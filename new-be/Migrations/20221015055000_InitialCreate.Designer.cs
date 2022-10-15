﻿// <auto-generated />
using System;
using MealForFamily.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace MealForFamily.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221015055000_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("MealForFamily.Models.AboutUs", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("RawDescription")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("AboutUs");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "<h1>About us</h1></br><p>We are organisation meal for families 3M.</p>",
                            RawDescription = ""
                        });
                });

            modelBuilder.Entity("MealForFamily.Models.BankAccount", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("AccountNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ReceiverAddress")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ReceiverCity")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ReceiverName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ReferenceNumber")
                        .HasColumnType("text");

                    b.Property<string>("TransactionModel")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("BankAccount");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AccountNumber = "160-6000001255298-83",
                            PhoneNumber = "(00 381) 60 37-65-017",
                            ReceiverAddress = "Miše Dimitrijevića 3B",
                            ReceiverCity = "Novi Sad",
                            ReceiverName = "Obrok za porodicu 3M",
                            ReferenceNumber = "",
                            TransactionModel = ""
                        });
                });

            modelBuilder.Entity("MealForFamily.Models.Contact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Contacts");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "obrokzaporodicu3m@gmail.com",
                            PhoneNumber = "(00 381) 60 37-65-017",
                            Title = "Obrok za porodicu 3M"
                        });
                });

            modelBuilder.Entity("MealForFamily.Models.News", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Descrition")
                        .HasColumnType("text");

                    b.Property<string>("ImageURL")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("RawDescrition")
                        .HasColumnType("text");

                    b.Property<string>("ShortDescription")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("News");
                });

            modelBuilder.Entity("MealForFamily.Models.NewsletterSubscription", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("NewsletterSubscriptions");
                });

            modelBuilder.Entity("MealForFamily.Models.VolunteerAction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("ImageURL")
                        .HasColumnType("text");

                    b.Property<string>("RawDescription")
                        .HasColumnType("text");

                    b.Property<string>("ReferenceNumber")
                        .HasColumnType("text");

                    b.Property<string>("ShortDescription")
                        .HasColumnType("text");

                    b.Property<int>("StatusId")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("TypeId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("StatusId");

                    b.HasIndex("TypeId");

                    b.ToTable("VolunteerActions");
                });

            modelBuilder.Entity("MealForFamily.Models.VolunteerActionStatus", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("VolunteerActionStatuses");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Trenutno u toku"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Uspešno završena"
                        });
                });

            modelBuilder.Entity("MealForFamily.Models.VolunteerActionType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<bool?>("HasPayment")
                        .HasColumnType("boolean");

                    b.Property<bool?>("HasPickup")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("VolunteerActionTypes");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            HasPayment = false,
                            HasPickup = true,
                            Name = "Hrana"
                        },
                        new
                        {
                            Id = 2,
                            HasPayment = true,
                            HasPickup = false,
                            Name = "Novac"
                        },
                        new
                        {
                            Id = 3,
                            HasPayment = false,
                            HasPickup = true,
                            Name = "Odeća i obuća"
                        },
                        new
                        {
                            Id = 4,
                            HasPayment = false,
                            HasPickup = true,
                            Name = "Igračke"
                        },
                        new
                        {
                            Id = 5,
                            HasPayment = false,
                            HasPickup = true,
                            Name = "Ostalo"
                        });
                });

            modelBuilder.Entity("MealForFamily.Models.VolunteerAction", b =>
                {
                    b.HasOne("MealForFamily.Models.VolunteerActionStatus", "Status")
                        .WithMany()
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("MealForFamily.Models.VolunteerActionType", "Type")
                        .WithMany()
                        .HasForeignKey("TypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Status");

                    b.Navigation("Type");
                });
#pragma warning restore 612, 618
        }
    }
}
