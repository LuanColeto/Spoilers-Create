import React from 'react';

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark mb-4">
                <h1 className=" text-dark" style={{marginBottom: '40px', marginTop: '40px'}}>#Spoilers</h1>
            </nav>
            <main role="main" className="container">
                <div className="jumbotron">
                    <h1 className="text-center" style={{marginBottom: '40px'}}>Cuidado!</h1>
                    <p className="lead text-center">Você está entrando em um zona de spoilers</p>
                    <p className="lead text-center">Estou ciente e quero continuar</p>
                    <a className="btn btn-lg btn-primary " style={{backgroundColor: '#a64452'}} href="/docs/4.5/components/navbar/" role="button">Continuar</a>
                </div>
            </main>
        </div>
    )
};

export default Home;
