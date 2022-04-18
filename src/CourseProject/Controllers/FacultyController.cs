using CourseProject.Dto.FacultyDto;
using CourseProject.Models;
using CourseProject.Repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
    public class FacultyController : ControllerBase
    {
        private IRepositoryWrapper _repositoryWrapper;

        public FacultyController(IRepositoryWrapper repositoryWrapper)
        {
            _repositoryWrapper = repositoryWrapper;
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _repositoryWrapper.Faculty.FindAllAsync();
            var result1 = new List<UpdateFacultyDto>();
            if(result!=null)
            {
                foreach(var item in result)
                {
                    var university = await _repositoryWrapper.University.FindFirstByConditionAsync(x => x.Id.Equals(item.UniversityId));
                    var newFaculty = new UpdateFacultyDto
                    {
                        Id = item.Id,
                        Name = item.Name,
                        UniversityName = university.Name
                    };
                    result1.Add(newFaculty);
                }
                return new JsonResult(result1);
            }
            return NotFound();
        }

        [HttpGet("universityName")]
        [Route("GetFacultyNamesByUniversity")]
        public async Task<IActionResult> GetFacultyNamesByUniversity(string universityName)
        {
            var university = await _repositoryWrapper.University.FindFirstByConditionAsync(x => x.Name.Equals(universityName));
            var result = await _repositoryWrapper.Faculty.FindByConditionAsync(x => x.UniversityId.Equals(university.Id));
            var result1 = new List<string>();
            if (result != null)
            {
                foreach (var item in result)
                {
                    result1.Add(item.Name);
                }
                return new JsonResult(result1.Distinct());
            }
            return NotFound();
        }

        [HttpPost]
        [Route("Create")]
        public async Task<IActionResult> Create([FromBody] CreateFacultyDto model)
        {
            if (ModelState.IsValid)
            {
                var university = await _repositoryWrapper.University.FindFirstByConditionAsync(x => x.Name.Equals(model.UniversityName));
                var faculty = new Faculty
                {
                    Id = Guid.NewGuid(),
                    Name = model.Name,
                    University = university
                };
                await _repositoryWrapper.Faculty.CreateAsync(faculty);
                return Ok(new Response { Status = "Success", Message = "Faculty created successfully" });
            }
            return NotFound();
        }

        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> Update([FromBody] UpdateFacultyDto model)
        {
            if (ModelState.IsValid)
            {
                var university = await _repositoryWrapper.University.FindFirstByConditionAsync(x => x.Name.Equals(model.UniversityName));
                var faculty = new Faculty
                {
                    Id = model.Id,
                    Name = model.Name,
                    University = university
                };
                await _repositoryWrapper.Faculty.UpdateAsync(faculty);
                return Ok(new Response { Status = "Success", Message = "Faculty update successfully" });
            }
            return NotFound();
        }

        [HttpDelete]
        [Route("Delete")]
        public async Task<IActionResult> Delete([FromBody] DeleteFacultyDto model)
        {
            if (ModelState.IsValid)
            {
                var faculty = await _repositoryWrapper.Faculty.FindFirstByConditionAsync(x => x.Id.Equals(model.Id));
                await _repositoryWrapper.Faculty.DeleteAsync(faculty);
                return Ok(new Response { Status = "Success", Message = "Faculty deleted successfully" });
            }
            return NotFound();
        }
    }
}
