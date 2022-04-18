using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using CourseProject.Repository.Interfaces;
using System.Threading.Tasks;
using System.Collections.Generic;
using System;
using CourseProject.Models;
using Microsoft.AspNetCore.Identity;

namespace CourseProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class StatisticController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private IRepositoryWrapper _repositoryWrapper;

        public StatisticController(UserManager<User> userManager, SignInManager<User> signInManager, IRepositoryWrapper repositoryWrapper)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _repositoryWrapper = repositoryWrapper;
        }

        [HttpGet]
        [Route("StatisticUniversity")]
        public async Task<IActionResult> StatisticUniversity()
        {
            var universities = await _repositoryWrapper.University.FindAllAsync();
            int count = 0;
            List<Tuple<string, string>> result = new List<Tuple<string, string>>();
            foreach(var university in universities)
            {
                count = 0;
                var faculties = await _repositoryWrapper.Faculty.FindByConditionAsync(x => x.UniversityId.Equals(university.Id));
                foreach(var faculty in faculties)
                {
                    var professions = await _repositoryWrapper.Profession.FindByConditionAsync(x => x.FacultyId.Equals(faculty.Id));
                    foreach (var profession in professions)
                    {
                        var groups = await _repositoryWrapper.Group.FindByConditionAsync(x => x.ProfessionId.Equals(profession.Id));
                        foreach(var group in groups)
                        {
                            var students = _userManager.Users;
                            foreach (var student in students)
                            {
                                if (student.GroupId == group.Id)
                                    count++;
                            }
                        }
                    }
                }
                result.Add(Tuple.Create(university.Name, count.ToString()));
            }
            return new JsonResult(result);
        }
    }
}
