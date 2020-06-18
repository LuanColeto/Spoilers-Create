import React, {useState, useEffect} from 'react';
import Cabecalho from '../../components/cabecalho';
import { Link } from 'react-router-dom';
import api from '../../services/api';

interface Spoiler {
    id:number,
    title:string,
    name:string,
    description:string
}

const Spoilers = () => {
    const [spoilers, setSpoilers] = useState<Spoiler[]>([]);

    useEffect(() => {
       api.get('/spoilers').then(response => {
           setSpoilers(response.data);
       })
    }, []);

    return (
        <div>
            <Cabecalho/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <main className="col-xl-4 col-lg-4">
                        {spoilers.map(spoiler => (
                            <div className="card mb-4" key={spoiler.id}>
                                <h5 className="card-header">{spoiler.name}</h5>
                                <div className="card-body">
                                    <div className="media">
                                        <img className="mr-3" alt="Spoiler"  />
                                        <div className="media-body">
                                            <h5>{spoiler.title}</h5>
                                            <p>{spoiler.description}</p>
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
                        ))}
                    </main>
                </div>
            </div>
        </div>
    )
};

export default Spoilers;
