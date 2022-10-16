namespace MealForFamily.DTOs
{
    public class VolunteerActionTypeDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public bool? HasPickup { get; set; } = true;
        public bool? HasPayment { get; set; } = false;
    }
}
