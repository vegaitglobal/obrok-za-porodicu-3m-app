namespace MealForFamily.Dtos
{
    public class RequestVolunteerActionTypeDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public bool HasPickup { get; set; }
        public bool HasPayment { get; set; }
    }
}
