using System;

namespace CourseProject.Dto.UniversityDto
{
    public class UpdateUniversityDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string MinLatitude { get; set; }
        public string MaxLatitude { get; set; }
        public string MinLongitude { get; set; }
        public string MaxLongitude { get; set; }
    }
}
