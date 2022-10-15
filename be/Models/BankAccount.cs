using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Models
{
    public class BankAccount
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string ReceiverName { get; set; } = string.Empty;

        [Required]
        public string ReceiverCity { get; set; } = string.Empty;

        [Required]
        public string ReceiverAddress { get; set; } = string.Empty;

        [Required]
        public string AccountNumber { get; set; } = string.Empty;

        public string? TransactionModel { get; set; } = string.Empty;

        public string? ReferenceNumber { get; set; } = string.Empty;

        [Required]
        public string PhoneNumber { get; set; } = string.Empty;
    }
}
