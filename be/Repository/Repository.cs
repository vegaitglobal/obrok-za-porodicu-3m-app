using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using Microsoft.EntityFrameworkCore;

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

        public async Task<Page<T>> GetAllByPage(int pageNumber, int pageSize)
        {
            // TODO: Optimize count query
            int totalCount = _context.Set<T>().Count();

            // TODO: Add OrderBy
            IEnumerable<T> content = await _context.Set<T>().Skip(GetNumberOfElements(pageNumber, pageSize)).Take(pageSize).ToListAsync();

            return createPage(pageNumber, pageSize, totalCount, content);
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

        public Page<T> createPage(int currentPage, int pageSize, int totalResults, IEnumerable<T> content)
        {
            int totalPages = (int)Math.Ceiling((double)totalResults / pageSize);

            return new Page<T>(currentPage, pageSize, totalPages, totalResults, content);
        }
    }
}
