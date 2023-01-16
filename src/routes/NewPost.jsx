import blogFetch from '../axios/config';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';






import './NewPost.css'

const NewPost = () => {


  const navigate = useNavigate()

  const [nome, setNome] = useState()
  const [ano, setAno] = useState()
  const [descricao, setDescricao] = useState()
  const [duracao, setDuracao] = useState()
  const [poster, setPoster] = useState()

  const createPost = async (e) => {
    e.preventDefault();

    const post = {nome, ano, descricao, duracao, poster, userId: 1 };
    await blogFetch.post("/drama",post);

    navigate("/");
  }


  return <div className="new-post">
    <h2>Cadastrar Filme</h2>
    <form onSubmit={(e) => createPost(e)}>
      <div className="div form-control">
        <label htmlFor="nome">Nome:</label>
        <input 
          type="text" 
          name="nome" 
          id="nome" 
          placeholder="Digite o nome do filme" 
          onChange={(e) => setNome(e.target.value)}

        />
      </div>
      <div className="div form-control">
        <label htmlFor="ano">Ano:</label>
        <input 
          type="text" 
          name="ano" 
          id="ano" 
          placeholder="Digite o ano de lançamento" 
          onChange={(e) => setAno(e.target.value)}
        />
      </div>
      <div className="div form-control">
        <label htmlFor="descicao">Descrição:</label>
        <textarea 
          name="descricao" 
          id="descicao" 
          placeholder="Digite a descrição do filme" 
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
      </div>
      <div className="div form-control">
        <label htmlFor="duracao">Duração:</label>
        <input 
          type="text" 
          name="duracao" 
          id="duracao" 
          placeholder="duração do filme" 
          onChange={(e) => setDuracao(e.target.value)}
        />
      </div>
      <div className="div form-control">
        <label htmlFor="imagem">Link da imagem:</label>
        <input 
          type="text" 
          name="imagem" 
          id="imagem" 
          placeholder="link da imagem" 
          onChange={(e) => setPoster(e.target.value)}
        />
      </div>
        
      
      <input type="submit" value="Cadastrar" className="btn"/>

    </form>
  </div>;
};

export default NewPost