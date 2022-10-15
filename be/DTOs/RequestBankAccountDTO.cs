namespace MealForFamily.Dtos
{
    public class RequestBankAccountDTO
    {
        public int Id { get; set; }
        public string ReceiverName { get; set; } = string.Empty;
        public string ReceiverCity { get; set; } = string.Empty;
        public string ReceiverAddress { get; set; } = string.Empty;
        public string AccountNumber { get; set; } = string.Empty;
        public string TransactionModel { get; set; } = string.Empty;
        public string ReferenceNumber { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
    }
}
