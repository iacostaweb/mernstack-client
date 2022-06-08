import React, { useState } from "react";
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const CrearPost = () => {

  //Navegar
    const navigate = useNavigate

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [post, setPost] = useState('');
    //Funcion que ejcutara la toma de datos del formulario y la ejecucion del axios
    const crearpost = () => {
      //En esta constante se definen los nombres de las variables (que deben coincidir con los nombres de las variables definidos en el archivo de rutas, tanto en el esquema como en el router.post), y se colocan los valores que tomaran esas variables, que seran los valores colocados en los value de el formulario.
        const newpost = {
            titulo: titulo,
            autor: autor,
            content: post,
            //La funcion uniqid es una imporacion de una libreria instalada con npm que asigna id unicos (adicionales a los que ya proporciona mongoDB)
            postid: uniqid(),
        }
        console.log(newpost);
        //Lugo de definir la toma de datos del formulario, que se pueden visualizar con el console.log, ejecutmaos la peticion con axios, en este caso post.

        //Metodo axios del tutorial
       /*  axios.post('/api/posts/crearpost', newpost)
        .then(res => {
            alert(res.data);
        })
        .then(err => {
            console.log(err);
        }) */

        //Metodo axios aprendido de GEOD - con destructuring {data}
        axios.post('/api/posts/crearpost', newpost)
        .then(({data}) => {
          console.log(data);
          /* alert("Post creado con exito") */
          Swal.fire(
            'Post creado con éxito!',
            'Gracias por publicar en el foro',
            'success'
          )
          setTimeout(() => {
            navigate('/');
          }, 1500)
        })
        .catch((err) => {
          console.log("Error creando el post",'success');
        })
    }

  return (
    <>
      <div className="container">
        <div className="container my-5">
          <div className="mb-3">
            <label className="form-label">Titulo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Titulo del Post"
              value={titulo}
              onChange={(e) => {setTitulo(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Autor</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nick"
              value={autor}
              onChange={(e) => {setAutor(e.target.value)}}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Post</label>
            <textarea 
            className="form-control" 
            rows="3"
            value={post}
            onChange={(e) => {setPost(e.target.value)}}
            ></textarea>
          </div>
          <button onClick={crearpost} className="btn btn-success">Crear</button>
        </div>
      </div>
    </>
  );
};

export default CrearPost;
