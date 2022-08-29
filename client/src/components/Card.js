import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../App.css';

const Card = () => {

    const [palavraComum, setPalavraComum] = useState('');
    const [novaComum, setNovaComum] = useState('');
    const [comumLista, setComumLista] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((response) => {
        setComumLista(response.data);
      });
    }, []);
  
    const AdicionarNaTabela = () => {
        Axios.post('http://localhost:3001/insert', {
            palavraComum: palavraComum,
      }).then((response) => 
      {
        setComumLista([...response.data]);
      });
    };

    const AtualizarComuns = (id) => {
        Axios.put('http://localhost:3001/update', 
        {
            id: id,
            novaComum: novaComum,
        }).then((response) => {
            setComumLista([...response.data]);
        });
    };
    const DeletarComuns = (id) => {
      Axios.delete(`http://localhost:3001/delete/${id}`, 
      {
        comumLista: comumLista,
      }).then((response) => {
        setComumLista([...response.data]);
      });
    };

    return (
        <div className="row">
            <div className="column">
                <div className="card">
                    <h2>Comuns</h2>
                    <input 
                        className='input-border'
                        type='text' 
                        onChange={(event) => 
                        {
                            setPalavraComum(event.target.value);
                        }}
                    />
                    <button onClick={AdicionarNaTabela}>Adicionar</button>
                    <hr className='titulo'></hr>
                    {comumLista.map((val, i) => {

                        return (
                        <div key={i}>
                            <p> {val.PalavrasComuns} </p> 
                            <input 
                                className='input-border'
                                type="text" 
                                placeholder="alterar" 
                                onChange={(event) => 
                                {
                                    setNovaComum(event.target.value);
                                }}
                            />
                            <button className="update-delete" onClick={() => AtualizarComuns(val._id)}>Atualizar</button>
                            <button className="update-delete" onClick={() => DeletarComuns(val._id)}>Deletar</button>
                            <hr></hr>
                        </div>
                        );
                    })}
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <h2>Siglas</h2>
                    <hr className='titulo'></hr>
                    <input className='input-border' type='text' placeholder='em breve' />
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <h2>Nomes Próprios</h2>
                    <hr className='titulo'></hr>
                    <input className='input-border' type='text' placeholder='em breve' />
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <h2>Palavrões</h2>
                    <hr className='titulo'></hr>
                    <input className='input-border' type='text' placeholder='em breve' />
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <h2>Gírias</h2>
                    <hr className='titulo'></hr>
                    <input className='input-border' type='text' placeholder='em breve' />
                </div>
            </div>
        </div>
    )
}

export default Card