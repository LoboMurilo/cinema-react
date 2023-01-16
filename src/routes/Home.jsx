import blogFetch from "../axios/config";

import {useState, useEffect} from "react";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    
    try {
      const response = await blogFetch.get("/drama");
      
      const data = response.data;
      
      setPosts(data);




    } catch (error) {
        console.log(error);
    }


  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
  <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (<p>Carregando...</p>) : (
        posts.map( (post) => (
          <div className="post" key={post.id}>
            <h2>{post.nome}</h2>
            <p>{post.ano}</p>
            <p>{post.descricao}</p>
            <p>{post.duracao}</p>
            <p>
              <img src={post.poster} alt="" width="150px" />
            </p>
            <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
          </div>
        ))
      )}
  </div>
  )
}

export default Home
