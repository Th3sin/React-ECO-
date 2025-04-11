import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './solicitacao.css'

function Solicitacao () {

    //const [cep, setCep] = useState('');
    //const [logradouro, setLogradouro] = useState('');
    //const [numero, setNumero] = useState('');

    return (

        <div className='container-solicitacao'>

            <div>
                <label htmlFor='nome-residuo'>Identificação do Material</label>
                <input type='text' className='nome-residuo' placeholder='Digite o nome do resíduo'></input>
            </div>

            <div>
                <label htmlFor='quantidade-residuo'>Quantidade</label>
                <input type='text' name='quantidade-residuo' placeholder='Quantidade do material (kg, litros, unidades)'></input>
            </div>

            <div>
                <label htmlFor='nome-residuo'></label>
                <input type='text' name='nome-residuo' placeholder='Digite o nome do resíduo'></input>
            </div>

            <div>
                <label htmlFor='nome-residuo'>Identificação do Material</label>
                <input type='text' name='nome-residuo' placeholder='Digite o nome do resíduo'></input>
            </div>

            <div>
                <button>
                    <h1>Solicitar Coleta</h1>
                </button>
            </div>
        </div>
    )
};

export default Solicitacao;