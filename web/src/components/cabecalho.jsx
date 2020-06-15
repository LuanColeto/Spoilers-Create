import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

const Cabecalho = () => {
    return (
        <header>
            <div className="jumbotron">
                <div className="container">
                    <Link to="/">
                        <h1 className="display-3" id="main-title">#Spoilers</h1>
                    </Link>
                    <p style={{marginTop: '40px'}}>Faça Spoilers, não faça guerra :)</p>
                    <Link to="/create">
                        <p className="btn btn-primary btn-lg" style={{backgroundColor: '#34CB79', border: 'none', marginTop: '40px'}} role="button">Criar Spoiler</p>
                        </Link>
                </div>
            </div>
        </header>
    )
};

export default Cabecalho;
