import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Cartas = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
  }, []);

  return (
    <>
      <h1 className="text-danger mb-2">Characters</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.personajes.map((item, index) => (
          <div className="col-12 col-md-4 col-lg-3 mx-1" key={index}>
            <div className="card" style={{ backgroundColor: '#0d1117', color: 'white' }}>
              <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." style={{ height: "260px", objectFit: "cover" }} />
              <div className="card-body px-2 py-2 fw-semibold">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text mb-1">Gender: {item.gender}</p>
                <p className="card-text mb-1">Hair Color: {item.hair_color}</p>
                <p className="card-text mb-3">Eye-Color: {item.eye_color}</p>
                <div className="d-flex justify-content-between">
                  <a href="#" className="btn btn-outline-primary fw-bold">Learn more!</a>
                  <button 
                    onClick={() => actions.AddOrDeleteFavorite(item)} 
                    className="btn btn-outline-warning"
                  >
                    <i 
                      className={`fa${store.favoriteList.some(fav => fav.uid === item.uid) ? 's' : 'r'} fa-heart`}
                      style={{ color: store.favoriteList.some(fav => fav.uid === item.uid) ? '#ffc107' : 'inherit' }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/> <br/>
      <h1 className="text-danger mb-2">Planets</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.planets.map((item, index) => (
          <div className="col-12 col-md-4 col-lg-3 mx-1" key={index}>
            <div className="card" style={{ backgroundColor: '#0d1117', color: 'white' }}>
              <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." style={{ height: "260px", objectFit: "cover" }} />
              <div className="card-body px-2 py-2 fw-semibold">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text mb-1">Climate: {item.climate}</p>
                <p className="card-text mb-1">Terrain: {item.terrain}</p>
                <p className="card-text mb-3">Population: {item.population}</p>
                <div className="d-flex justify-content-between">
                  <a href="#" className="btn btn-outline-primary fw-bold">Learn more!</a>
                  <button 
                    onClick={() => actions.AddOrDeleteFavorite(item)} 
                    className="btn btn-outline-warning"
                  >
                    <i 
                      className={`fa${store.favoriteList.some(fav => fav.uid === item.uid) ? 's' : 'r'} fa-heart`}
                      style={{ color: store.favoriteList.some(fav => fav.uid === item.uid) ? '#ffc107' : 'inherit' }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};