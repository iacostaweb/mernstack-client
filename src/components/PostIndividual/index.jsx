import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PostIndividual = ({ item }) => {
  //Navegacion
  const navegar = useNavigate();
  //Funcion para eliminar
  const borrarpost = (postid) => {
    axios
      .post("/api/posts/deletepost", { postid: postid })
      .then(({ data }) => {
        console.log(data);
        //Swal fire, llamada al Sweet Alert 2
        Swal.fire(
          "Se elimino la publicacion!",
          "Este cambio no se puede deshacer",
          "warning"
        );

        setTimeout(() => {
          navegar(0);
        }, 1500);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div className="container my-5">
        <div className="row">
          <ul className="list-group">
            <p className="">{item.postid}</p>
            <p className="">{item.titulo}</p>
            <p className="">{item.autor}</p>
            <p className="">{item.content}</p>
          </ul>
          <div className="col-md-12 row">
            <div className="col-md-6 d-flex justify-content-end">
              <Link to={`/editar-post/${item.postid}`}>
                <li className="btn btn-success m-3">Editar</li>
              </Link>
            </div>
            <div className="col-md-6 d-flex justify-content-start">
              {" "}
              <button
                className="btn btn-danger m-3"
                onClick={() => {
                  borrarpost(item.postid);
                }}
              >
                Borrar
              </button>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              {" "}
              <div className="col-md-6 d-flex justify-content-center">
              <Link to={`/editar-post/${item.postid}`}>
                <li className="btn btn-info m-3 w-100">Leer Post</li>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostIndividual;
