using CourseProject.Models;
using CourseProject.Repository.Interfaces;

namespace CourseProject.Repository
{
    public class UniversityRepository : RepositoryBase<University>, IUniversityRepository
    {
        public UniversityRepository(ApplicationContext applicationContext)
            : base(applicationContext)
        {

        }
    }
}
