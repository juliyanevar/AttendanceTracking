using CourseProject.Dto.UniversityDto;
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
    public class UniversityController : ControllerBase
    {
        private IRepositoryWrapper _repositoryWrapper;

        public UniversityController(IRepositoryWrapper repositoryWrapper)
        {
            _repositoryWrapper = repositoryWrapper;
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _repositoryWrapper.University.FindAllAsync();
            if (result != null)
            {
                return new JsonResult(result);
            }
            return NotFound();
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
                    Name = model.Name
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
                    Name = model.Name
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
