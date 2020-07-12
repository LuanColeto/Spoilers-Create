import React, {ChangeEvent, FormEvent, useState} from 'react';
import Cabecalho from '../../components/cabecalho'
import api from "../../services/api";
import { useHistory } from 'react-router-dom'

const CreateSpoiler = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        description: ''
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({...formData, [name] : value});

        console.log(setFormData);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const {name, title, description} = formData;

        const data = {
            name,
            title,
            description
        };

        const response = await api.post('spoilers', data);

        history.push('/');
    };

    return (
        <div>
            <Cabecalho/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <main className="col-xl-4 col-lg-4" role="main">
                        <form className="container" onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>Criar Spoiler</legend>
                                <div className="form-group">
                                    <label htmlFor="name">Espoliador</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Fulano de Tal"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Título</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        aria-describedby="tituloAjuda"
                                        placeholder="Star Wars"
                                        onChange={handleInputChange}
                                    />
                                    <small id="tituloAjuda" className="form-text text-muted">
                                        Um título pode ser um filme, série, livro...
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Descrição</label>
                                    <input
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        placeholder="Luke morre"
                                        onChange={handleInputChange}
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

export default CreateSpoiler;
