namespace MealForFamily.Dtos
{
    public class VolunteerActionFilterDTO
    {
        public List<int>? ActionTypeIds { get; set; }

        public List<int>? ActionStatusesIds { get; set; }

        public string? SearchTerm { get; set; }
    }
}
