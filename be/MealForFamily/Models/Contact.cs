using System;
using System.Collections.Generic;

namespace MealForFamily.Models
{
    public partial class Contact
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Phonenumber { get; set; } = null!;
        public string Createdat { get; set; } = null!;
        public string Updatedat { get; set; } = null!;
        public bool Isdeleted { get; set; }
    }
}
