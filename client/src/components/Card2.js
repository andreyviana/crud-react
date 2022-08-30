
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../App.css';

const Card2 = () => {

//
//
//
//GENERALIZAÇAO
//
//
//

    const [useGeneralizacao, setUseGeneralizacao] = useState('');
    const [novaGeneralizacao, setNovaGeneralizacao] = useState('');
    const [generalizacaoLista, setGeneralizacaoLista] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/readgen').then((response) => {
        setGeneralizacaoLista(response.data);
    });
    }, []);

    const AdicionarGenNaTabela = () => {
        Axios.post('http://localhost:3001/insertgen', {
            useGeneralizacao: useGeneralizacao,
    }).then((response) => 
    {
        setGeneralizacaoLista([...response.data]);
    });
    };

    const AtualizarGeneralizacao = (id) => {
        Axios.put('http://localhost:3001/updategen', 
        {
            id: id,
            novaGeneralizacao: novaGeneralizacao,
        }).then((response) => {
            setGeneralizacaoLista([...response.data]);
        });
    };
    const DeletarGeneralizacao = (id) => {
    Axios.delete(`http://localhost:3001/deletegen/${id}`, 
    {
        generalizacaoLista: generalizacaoLista,
    }).then((response) => {
        setGeneralizacaoLista([...response.data]);
    });
    };

//
//
//
//DITADOS POPULARES
//
//
//

const [Ditado, setDitado] = useState('');
const [novoDitado, setNovoDitado] = useState('');
const [ditadoLista, setDitadoLista] = useState([]);

useEffect(() => {
    Axios.get('http://localhost:3001/readdit').then((response) => {
    setDitadoLista(response.data);
});
}, []);

const AdicionarDitado = () => {
    Axios.post('http://localhost:3001/insertdit', {
        Ditado: Ditado,
}).then((response) => 
{
    setDitadoLista([...response.data]);
});
};

const AtualizarDitado = (id) => {
    Axios.put('http://localhost:3001/updatedit', 
    {
        id: id,
        novoDitado: novoDitado,
    }).then((response) => {
        setDitadoLista([...response.data]);
    });
};
const DeletarDitado = (id) => {
Axios.delete(`http://localhost:3001/deletedit/${id}`, 
{
    ditadoLista: ditadoLista,
}).then((response) => {
    setDitadoLista([...response.data]);
});
};

    return (
        <div className="row">
            <div id="ditado" className="column">
                <div className="card">
                    <h2>Ditados Populares</h2>
                    <input 
                        className='input-border'
                        type='text' 
                        onChange={(event) => 
                        {
                            setDitado(event.target.value);
                        }}
                    />
                    <button onClick={AdicionarDitado}>Adicionar</button>
                    <hr className='titulo'></hr>
                    <div className='responsive'>
                        {ditadoLista.map((val, i) => {
                            return (
                            <div key={i}>
                                <p> {val.DitadosPopulares} </p> 
                                <input 
                                    className='input-border'
                                    type="text" 
                                    placeholder="alterar" 
                                    onChange={(event) => 
                                    {
                                        setNovoDitado(event.target.value);
                                    }}
                                />
                                <button className="update-delete" onClick={() => AtualizarDitado(val._id)}>Atualizar</button>
                                <button className="update-delete" onClick={() => DeletarDitado(val._id)}>Deletar</button>
                                <hr></hr>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div id="generalizacao" className="column">
                <div className="card">
                    <h2>Generalização</h2>
                    <input 
                        className='input-border'
                        type='text' 
                        onChange={(event) => 
                        {
                            setUseGeneralizacao(event.target.value);
                        }}
                    />
                    <button onClick={AdicionarGenNaTabela}>Adicionar</button>
                    <hr className='titulo'></hr>
                    <div className='responsive'>
                        {generalizacaoLista.map((val, i) => {
                            return (
                            <div key={i}>
                                <p> {val.Generalizacoes} </p> 
                                <input 
                                    className='input-border'
                                    type="text" 
                                    placeholder="alterar" 
                                    onChange={(event) => 
                                    {
                                        setNovaGeneralizacao(event.target.value);
                                    }}
                                />
                                <button className="update-delete" onClick={() => AtualizarGeneralizacao(val._id)}>Atualizar</button>
                                <button className="update-delete" onClick={() => DeletarGeneralizacao(val._id)}>Deletar</button>
                                <hr></hr>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div id="opiniao" className="column">
                <div className="card">
                    <h2>Opinião Política</h2>
                     
                    <hr className='titulo'></hr>
                    <input className='input-border' type='text' placeholder='em breve' />
                </div>
            </div>
            <div id="preconceito" className="column">
                <div className="card">
                    <h2>Preconceito</h2>
                     
                    <hr className='titulo'></hr>
                    <input className='input-border' type='text' placeholder='em breve' />
                </div>
            </div>
            <div id="cliche" className="column">
                <div className="card">
                    <h2>Clichês</h2>
                     
                    <hr className='titulo'></hr>
                    <input className='input-border' type='text' placeholder='em breve' />
                </div>
            </div>
        </div>
    )
}

export default Card2