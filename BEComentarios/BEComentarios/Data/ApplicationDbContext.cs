using BEComentarios.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BEComentarios.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<ComentarioDataModel> Comentario { get; set; }

        public ApplicationDbContext()
        {

        }

        public ApplicationDbContext(DbContextOptions options):base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=localhost;Database=ABMComentarios;Uid=root;Pwd=Reja2020.-");
            }           
        }
    }
}
