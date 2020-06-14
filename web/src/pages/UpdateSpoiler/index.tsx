import React from 'react';
import Cabecalho from '../../components/cabecalho'

const UpdateSpoiler = () => {
    return (
        <div>
            <Cabecalho/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <main className="col-xl-4 col-lg-4" role="main">
                        <form className="container">
                            <fieldset>
                                <legend>Editar Spoiler</legend>
                                <div className="form-group">
                                    <label htmlFor="espoliador">Espoliador</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="espoliador"
                                        name="espoliador"
                                        placeholder="Fulano de Tal"
                                        disabled={true}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="titulo">Título</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="titulo"
                                        name="titulo"
                                        aria-describedby="tituloAjuda"
                                        placeholder="Star Wars"
                                    />
                                    <small id="tituloAjuda" className="form-text text-muted">
                                        Um título pode ser um filme, série, livro...
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea
                                        className="form-control"
                                        id="descricao"
                                        name="descricao"
                                        placeholder="Luke morre"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Enviar
                                </button>
                            </fieldset>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
};

export default UpdateSpoiler;
