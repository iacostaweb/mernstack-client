import './App.css';
import CrearPost from './views/CrearPost';
import EditarPost from './views/EditarPost';
import ListarPost from './views/ListarPost';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestingRendering from './views/Testing/testing-rendering';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container p-3">
    <a className="navbar-brand" href="#">iacostaweb-Blog</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="crear-post">Crear Post</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="" aria-label="Buscar" />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
       <h1 className='text-info'>Client Testing...Working</h1>
      <h1>MERN Stack</h1>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<ListarPost/>} exact></Route>
        <Route path='/crear-post' element={<CrearPost/>} exact></Route>
        <Route path='/testing-rendering' element={<TestingRendering/>}></Route>
        <Route path='/editar-post/:postid' element={<EditarPost/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
