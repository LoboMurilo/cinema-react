import blogFetch from "../axios/config";

import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const Update = () => {

    const {id } = useParams();
    const navigate = useNavigate()

    const [nome, setNome] = useState()
    const [ano, setAno] = useState()
    const [descricao, setDescricao] = useState()
    const [duracao, setDuracao] = useState()
    const [poster, setPoster] = useState()

    const createUpdate = async (e) => {
        e.preventDefault();

        await blogFetch.patch(`/drama/${id}`,{
            nome: nome,
            ano: ano,
            descricao: descricao,
            duracao:duracao,
            poster: poster,
        });

        navigate("/");
    }

    return (
        <div className="update">
            <h2>Atualizar filme</h2>
            <form onSubmit={(e) => createUpdate(e)}>
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

                <input type="submit" value="Atualizar" className="btn"/>
            </form>
        </div>
    )

}

export default Update;