import React from 'react';

const Cabecalho = () => {
    return (
        <header>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">#Spoilers</h1>
                    <p style={{marginTop: '40px'}}>Faça Spoilers, não faça guerra :)</p>
                    <p><a className="btn btn-primary btn-lg" style={{backgroundColor: '#34CB79', border: 'none', marginTop: '40px'}} href="#" role="button">Criar Spoiler</a></p>
                </div>
            </div>
        </header>
    )
};

export default Cabecalho;
