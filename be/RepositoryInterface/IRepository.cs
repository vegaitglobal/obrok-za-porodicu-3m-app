namespace MealForFamily.RepositoryInterface
{
    public interface IRepository<T> where T : class
    {
        public Task<T> GetById(int id);

        public Task<IEnumerable<T>> GetAll();

        public Task<IEnumerable<T>> GetAllByPage(int pageNumber, int pageSize);

        public Task Save();

        public Task Delete(T enyity);

        public Task<T> Create(T entity);

        public Task<T> Update(T entity);
        int GetNumberOfElements(int pageNumber, int pageSize);
    }
}
