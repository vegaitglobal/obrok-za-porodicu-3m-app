namespace MealForFamily.Models
{
    public class Page<T>
    {
        public class PaginationInfo
        {
            public PaginationInfo(int currentPage, int pageSize, int totalPages, int totalResults)
            {
                CurrentPage = currentPage;
                PageSize = pageSize;
                TotalPages = totalPages;
                TotalResults = totalResults;
            }
            public int CurrentPage { get; set; }
            public int PageSize { get; set; }
            public int TotalPages { get; set; }
            public int TotalResults { get; set; }
        }
        public Page(int currentPage, int pageSize, int totalPages, int totalResults, IEnumerable<T> content)
        {
            Pagination = new PaginationInfo(currentPage, pageSize, totalPages, totalResults);
            Content = content;
        }

        public PaginationInfo Pagination { get; set; }
        public IEnumerable<T> Content { get; set; }
    }
}
