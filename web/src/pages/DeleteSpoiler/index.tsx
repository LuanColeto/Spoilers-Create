import React from 'react';
import Cabecalho from '../../components/cabecalho';
import { Link } from 'react-router-dom';


const DeleteSpoiler = () => {
    return (
        <div>
            <Cabecalho/>
            <div className="container">
                <div className="row">
                    <div className="card mb-4">
                        <h5 className="card-header">Star Wars</h5>
                        <div className= "card-body">
                            <p style={{marginBottom: '50px'}}>Tem certeza que deseja remover esse <br/>Spoiler? As pessoas podem sentir falta <br/>dele :/</p>
                            <p className="text-center">Darth Vader é pai do Luke</p>
                            <p className="text-center" style={{color: '#6c757d'}}>- Luan</p>
                            <Link to="/delete" className="btn btn-danger mr-3 col" role="button">
                                Remover
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DeleteSpoiler;
