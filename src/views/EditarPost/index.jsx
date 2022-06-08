import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const EditarPost = () => {

    const navigate = useNavigate();
    const params = useParams();

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [post, setPost] = useState('');

    const getPost = () => {
        const url = '/api/posts/editarpost';
        axios.post(url, {postid: params.postid})
        .then(({data}) => {
            console.log(data);
            //Recorro el objeto y establezco la posicion [0] en el array
            setTitulo(data[0].titulo);
            setAutor(data[0].autor);
            setPost(data[0].content);
            console.log(data[0].content);
        })
        .catch((err) => console.log(err))
    }

    //Funcion que actualiza
    const editpost = () => {
        const updatepost = {
            titulo: titulo,
            autor: autor,
            content: post,
            postid: params.postid,
        }
        //Peticion con axios
        axios.put('/api/posts/editar-post', updatepost)
        .then(({data}) => {
          console.log(data[0]);
         /*  alert("Post editado con exito") */
          Swal.fire(
            'Se edito el Post con exito!',
            'MERN Stack',
            'success'
          ) 

          setTimeout(() => {
            navigate('/');
          }, 1500)
        })
        .catch((err) => {
          console.log("Error creando el post");
        })
    }


    useEffect(() => {
        getPost();
},[])

    
    return ( 
        <>
        <h1>Editar Post</h1>
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
          <button onClick={editpost} className="btn btn-success">Editar Post</button>
        </div>
      </div>
        </>
     );
}
 
export default EditarPost;