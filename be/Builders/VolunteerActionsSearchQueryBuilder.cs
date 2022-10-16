using MealForFamily.Data;
using MealForFamily.Dtos;
using MealForFamily.Models;

namespace MealForFamily.Builders
{
    public class VolunteerActionsSearchQueryBuilder
    {
        IQueryable<VolunteerAction> query;

        public VolunteerActionsSearchQueryBuilder(DataContext context)
        {
            query = context.Set<VolunteerAction>();
        }

        public IQueryable<VolunteerAction> build(int pageNumber, int pageSize)
        {
            return query;
        }

        public VolunteerActionsSearchQueryBuilder withTypes(VolunteerActionFilterDTO filters)
        {
            if (filters is null)
                return this;

            List<int> actionTypeIds = filters.ActionTypeIds;
            if (actionTypeIds is not null && actionTypeIds.Count > 0)
                query = query.Where(s => actionTypeIds.Contains(s.TypeId));

            return this;
        }

        public VolunteerActionsSearchQueryBuilder withStatuses(VolunteerActionFilterDTO filters)
        {
            if (filters is null)
                return this;

            List<int> actionStatusesIds = filters.ActionStatusesIds;
            if (actionStatusesIds is not null && actionStatusesIds.Count > 0)
                query = query.Where(s => actionStatusesIds.Contains(s.Status.Id));

            return this;
        }

        public VolunteerActionsSearchQueryBuilder withSearchTerm(VolunteerActionFilterDTO filters)
        {
            if (filters is null)
                return this;

            string searchTerm = filters.SearchTerm;
            if (searchTerm is not null)
                query = query.Where(s => s.Title.ToLower().Contains(searchTerm.ToLower()));

            return this;
        }
    }
}
