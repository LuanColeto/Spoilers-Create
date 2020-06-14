import React from 'react';
import Cabecalho from '../../components/cabecalho';
import { Link } from 'react-router-dom'

const Spoilers = () => {
    return (
        <div>
            <Cabecalho/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <main className="col-xl-4 col-lg-4">
                        <div className="card mb-4">
                            <h5 className="card-header">Luan</h5>
                            <div className="card-body">
                                <div className="media">
                                    <img className="mr-3" alt="Spoiler"  />
                                    <div className="media-body">
                                        <h5>Star Wars</h5>
                                        <p>Darth Vader é pai do Luke</p>
                                    </div>
                                </div>
                                <Link to="/delete" className="btn btn-danger mr-3" role="button">
                                    Remover
                                </Link>
                                <Link to="/update" className="btn btn-primary" role="button">
                                    Editar
                                </Link>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <h5 className="card-header">Luan</h5>
                            <div className="card-body">
                                <div className="media">
                                    <img className="mr-3" alt="Spoiler"  />
                                    <div className="media-body">
                                        <h5>Star Wars</h5>
                                        <p>Darth Vader é pai do Luke</p>
                                    </div>
                                </div>
                                <Link to="/delete" className="btn btn-danger mr-3" role="button">
                                    Remover
                                </Link>
                                <Link to="/update" className="btn btn-primary" role="button">
                                    Editar
                                </Link>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <h5 className="card-header">Luan</h5>
                            <div className="card-body">
                                <div className="media">
                                    <img className="mr-3" alt="Spoiler"  />
                                    <div className="media-body">
                                        <h5>Star Wars</h5>
                                        <p>Darth Vader é pai do Luke</p>
                                    </div>
                                </div>
                                <Link to="/delete" className="btn btn-danger mr-3" role="button">
                                    Remover
                                </Link>
                                <Link to="/update" className="btn btn-primary" role="button">
                                    Editar
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
};

export default Spoilers;
