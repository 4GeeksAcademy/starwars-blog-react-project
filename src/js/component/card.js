import React, {useEffect,useContext} from "react";
import { Context } from "../store/appContext";
export const Cartas = (props) => {
    // destructuring
    const {store, actions} = useContext(Context)
    // llamando a la funcion getPeople
    useEffect(()=>{actions.getPeople()},[])
    console.log(store.personajes);
    
    return (
        
            <div className="row flex-nowrap overflow-auto pb-3 ms-4">
                {store.personajes.map((item, index) => (
                    <div className="col-12 col-md-4 col-lg-3" key={index}>
                        <div className="card">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." style={{height: "300px", objectFit: "cover"}} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text mb-1">Gender: {item.gender || 'n/a'}</p>
                                <p className="card-text mb-1">Hair Color: {item.hair_color || 'n/a'}</p>
                                <p className="card-text mb-3">Eye-Color: {item.eye_color || 'n/a'}</p>
                                <div className="d-flex justify-content-between">
                                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                                    <button onClick={() => actions.AddOrDeleteFavorite(item)} className="btn btn-outline-warning">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        
    );

}

// card border-info mb-3