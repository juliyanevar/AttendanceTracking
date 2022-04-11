using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Models
{
    public class University
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public ICollection<Faculty> Faculties { get; set; }
    }
}

