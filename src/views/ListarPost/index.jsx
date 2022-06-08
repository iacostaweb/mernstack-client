import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostIndividual from '../../components/PostIndividual';

const ListarPost = () => {

    const [postData, setPostData] = useState([])
    const getData = () => {
        const url = 'api/posts/obtenerposts';
        axios.get(url)
        .then(({data}) => {
            console.log(data);
            setPostData(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    //Mpaear lista de posts en objeto postData
   /*  const postList = postData.map(post => {
        return(
            <>
            <div>
            <PostIndividual post={post}/>
            </div>
            </>
        )
    })
 */
    useEffect(() => {
        getData();
    },[])

    return ( 
        <>
        <h1>Listar Post</h1>

        <div className="container">
            <div className="row col-md-12">
            {postData.map((item) => (
            <>
            <div className="col-md-4">    
            <PostIndividual item={item}> 
            </PostIndividual></div>
       
            </>
        ))}
            </div>
        </div>
    
      {/*   {postList} */}
        </>
     );
}
 
export default ListarPost;