import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


const TestingRendering = () => {
    const [mydata, setMyData] = useState([]);

//2 - Funcion que ejecuto cuando llamo al metodo onClick en el Button, en esta funcion establezco que el valor de mi elemento (tomado con index) es TRUE al declarar que es !lista[index].isOpen y seteo mi estado setMyData(lista)
    const toggle = (index) => {
        const lista = [...mydata];
        lista[index].isOpen = !lista[index].isOpen;
        setMyData(lista);
    }

    const getApiData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(({data}) => {
            //1 - Declaramos la constante "lista", a la cual le decimos que mapee el Array que me trae la peticion y luego (con spread operators) traiga todo ese Array y lo setee como isOpen: FALSE (es decir que todos los valores de Array de objetos traidos por la peticion estaran colapsados). Importante que debo navegar en el objeto data.results ya que results es donde se encuentra mi Array para trabajar
            const lista = data.results.map((item) => ({...item, isOpen: false}));
            //Luego seteo lista en mi actualizacion de estado.
            setMyData(lista);
            console.log(data.results);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getApiData();
    },[])

    return ( 
        <>
        {/* 3 - Mapeo mydata y le paso dos parametros, item e index*/}
         {mydata.map((item, index) => (
            <>
              <div className="container">
                  {/* 4 - En el Button, ejecuto el metodo de React onClick al cual le paso  la funcion toggle(index) con el parametro index declarado anteriormente. Esto esta indicando que se ejecutara la funcion Toggle en el parametro pasado (es decir index) y la funcion toggle tomara efecto SOLO en ese elemento especifico*/}
              <Button color="primary" className="btn btn-secondary w-100 my-3 fw-bold text-info" style={{textTransform: 'capitalize'}} onClick={() => toggle(index)}>{item.name}</Button>
              {/* 5- En el Collapse, paso el valor de item.isOpen a isOpen (Componente de Reacstrap) para renderizar el collapse del componente seleccionado*/}
   <Collapse isOpen={item.isOpen}>
        <Card>
          <CardBody>
          {item.url}
          </CardBody>
        </Card>
      </Collapse>
              </div>
            </>
        ))}

        </>
     );
}
 
export default TestingRendering;