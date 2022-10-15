using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }

        public async Task<T> Create(T entity)
        {
            _context.Set<T>().Add(entity);
            await _context.SaveChangesAsync();

            return entity;
        }

        public async Task Delete(T enyity)
        {
            _context.Set<T>().Remove(enyity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            List<T> entities = await _context.Set<T>().ToListAsync();

            return entities;
        }

        public async Task<IEnumerable<T>> GetAllByPage(int pageNumber, int pageSize)
        {
            List<T> entities = await _context.Set<T>().Skip(GetNumberOfElements(pageNumber, pageSize)).Take(pageSize).ToListAsync();

            return entities;
        }

        public async Task<T> GetById(int id)
        {
            T entity = await _context.Set<T>().FindAsync(id);

            return entity;
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<T> Update(T entity)
        {
            _context.Set<T>().Update(entity);
            await _context.SaveChangesAsync();

            return entity;
        }
        public int GetNumberOfElements(int pageNumber, int pageSize)
        {
            return (pageNumber - 1) * pageSize;
        }
    }
}
