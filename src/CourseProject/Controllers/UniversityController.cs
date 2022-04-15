using CourseProject.Dto.UniversityDto;
using CourseProject.Models;
using CourseProject.Repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UniversityController : ControllerBase
    {
        private IRepositoryWrapper _repositoryWrapper;
        private readonly UserManager<User> _userManager;

        public UniversityController(IRepositoryWrapper repositoryWrapper, UserManager<User> userManager)
        {
            _repositoryWrapper = repositoryWrapper;
            _userManager = userManager;
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _repositoryWrapper.University.FindAllAsync();
            var result1 = new List<UpdateUniversityDto>();
            if (result != null)
            {
                foreach (var item in result)
                {
                    var newUniversity = new UpdateUniversityDto
                    {
                        Id = item.Id,
                        Name = item.Name,
                        MinLatitude = item.MinLatitude.ToString(),
                        MinLongitude = item.MinLongitude.ToString(),
                        MaxLatitude = item.MaxLatitude.ToString(),
                        MaxLongitude = item.MaxLongitude.ToString()
                    };
                    result1.Add(newUniversity);
                }
                return new JsonResult(result1);
            }
            return NotFound();
        }

        [HttpGet]
        [Route("GetCurrentUniversity")]
        public async Task<IActionResult> GetCurrentUniversity()
        {
            var user = await _userManager.GetUserAsync(this.User);
            var group = await _repositoryWrapper.Group.FindFirstByConditionAsync(x => x.Id.Equals(user.GroupId));
            var profession = await _repositoryWrapper.Profession.FindFirstByConditionAsync(x => x.Id.Equals(group.ProfessionId));
            var faculty = await _repositoryWrapper.Faculty.FindFirstByConditionAsync(x => x.Id.Equals(profession.FacultyId));
            var university = await _repositoryWrapper.University.FindFirstByConditionAsync(x => x.Id.Equals(faculty.UniversityId));
            var result = new UpdateUniversityDto
            {
                Id = university.Id,
                Name = university.Name,
                MinLatitude = university.MinLatitude.ToString(),
                MinLongitude = university.MinLongitude.ToString(),
                MaxLatitude = university.MaxLatitude.ToString(),
                MaxLongitude = university.MaxLongitude.ToString()
            };
            return new JsonResult(result);
        }

        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> Create([FromBody] CreateUniversityDto model)
        {
            if (ModelState.IsValid)
            {
                var university = new University
                {
                    Id = Guid.NewGuid(),
                    Name = model.Name,
                    MinLatitude = float.Parse(model.MinLatitude),
                    MaxLatitude = float.Parse(model.MaxLatitude),
                    MinLongitude = float.Parse(model.MinLongitude),
                    MaxLongitude = float.Parse(model.MaxLongitude)
                };
                await _repositoryWrapper.University.CreateAsync(university);
                return Ok(new Response { Status = "Success", Message = "University created successfully" });
            }
            return NotFound();
        }

        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> Update([FromBody] UpdateUniversityDto model)
        {
            if (ModelState.IsValid)
            {
                var university = new University
                {
                    Id = model.Id,
                    Name = model.Name,
                    MinLatitude = float.Parse(model.MinLatitude),
                    MaxLatitude = float.Parse(model.MaxLatitude),
                    MinLongitude = float.Parse(model.MinLongitude),
                    MaxLongitude = float.Parse(model.MaxLongitude)
                };
                await _repositoryWrapper.University.UpdateAsync(university);
                return Ok(new Response { Status = "Success", Message = "University update successfully" });
            }
            return NotFound();
        }

        [HttpDelete]
        [Route("Delete")]
        public async Task<IActionResult> Delete([FromBody] DeleteUniversityDto model)
        {
            if (ModelState.IsValid)
            {
                var university = await _repositoryWrapper.University.FindFirstByConditionAsync(x => x.Id.Equals(model.Id));
                await _repositoryWrapper.University.DeleteAsync(university);
                return Ok(new Response { Status = "Success", Message = "University deleted successfully" });
            }
            return NotFound();
        }
    }
}
