using BEComentarios.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace BEComentarios.Data
{
    public class Service
    {
        public readonly ApplicationDbContext context;

        public Service(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<ComentarioDataModel> getComments()
        {
            try
            {
                return this.context.Comentario.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public ComentarioDataModel getComment(int id)
        {
            try
            {
                var comment = this.context.Comentario.Where(c => c.Id == id).FirstOrDefault();
                if (comment != null)
                    return comment;
                throw new Exception("No se encuentra el comentario");
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool addComment(ComentarioDataModel comentario)
        {
            try
            {
                this.context.Add(comentario);
                this.context.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool editComment(int id, ComentarioDataModel comentario)
        {
            try
            {
                var existingComent = this.context.Comentario.Where(c => c.Id == id).FirstOrDefault();
                if (existingComent != null)
                {
                    this.context.Entry(existingComent).State = EntityState.Detached;
                    existingComent = comentario;
                    this.context.Entry(existingComent).State = EntityState.Modified;
                    this.context.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool deleteComment(int id)
        {
            try
            {
                var existingComent = this.context.Comentario.Where(c => c.Id == id).FirstOrDefault();
                if (existingComent != null)
                {
                    this.context.Remove(existingComent);
                    this.context.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
