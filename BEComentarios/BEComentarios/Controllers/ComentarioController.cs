using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BEComentarios.Data;
using BEComentarios.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BEComentarios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComentarioController : ControllerBase
    {
        private Service service;

        public ComentarioController(Service service)
        {
            this.service = service;
        }

        // GET: api/<ComentarioController>
        [HttpGet]
        public ActionResult Get()
        {
            var viewComments = service.getComments();
            return Ok(viewComments);
        }

        // GET api/<ComentarioController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var viewComment = service.getComment(id);
            return Ok(viewComment);
        }

        // POST api/<ComentarioController>
        [HttpPost]
        public ActionResult Post([FromBody] ComentarioDataModel comentario)
        {
            var addComment = service.addComment(comentario);
            return Ok(addComment);
        }

        // PUT api/<ComentarioController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] ComentarioDataModel comentario)
        {
            if (id != comentario.Id)
                return BadRequest();
            var editComment = service.editComment(id, comentario);
            return Ok(editComment);
        }

        // DELETE api/<ComentarioController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var deleteComment = service.deleteComment(id);
            return Ok(deleteComment);
        }
    }
}
