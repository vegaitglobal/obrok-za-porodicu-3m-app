namespace WebApplication1.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }

        public string CreatedAt { get; set; }

        public string UpdatedAt { get; set; }

        public bool IsDeleted { get; set; }
    }
}
