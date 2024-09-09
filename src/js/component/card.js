import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Cartas = (props) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
    actions.getVehicles();
  }, []);

  const isFavorite = (item) => {
    return store.favoriteList.some(fav => `${fav.type}_${fav.uid}` === `${item.type}_${item.uid}`);
  };

  const renderCard = (item, type) => (
    <div className="col-12 col-md-4 col-lg-3 mx-1" key={`${type}_${item.uid}`}>
      <div className="card" style={{ backgroundColor: '#0d1117', color: 'white' }}>
        <img src={`https://starwars-visualguide.com/assets/img/${type}s/${item.uid}.jpg`} className="card-img-top" alt="..." style={{ height: "260px", objectFit: "cover" }} />
        <div className="card-body px-2 py-2 fw-semibold">
          <h5 className="card-title">{item.name}</h5>
          {type === 'character' && (
            <>
              <p className="card-text mb-1">Gender: {item.gender}</p>
              <p className="card-text mb-1">Hair Color: {item.hair_color}</p>
              <p className="card-text mb-3">Eye-Color: {item.eye_color}</p>
            </>
          )}
          {type === 'planet' && (
            <>
              <p className="card-text mb-1">Population: {item.population}</p>
              <p className="card-text mb-3">Terrain: {item.terrain}</p>
            </>
          )}
          {type === 'vehicle' && (
            <>
              <p className="card-text mb-1">Speed: {item.max_atmosphering_speed}km/h</p>
              <p className="card-text mb-3">Class: {item.vehicle_class}</p>
            </>
          )}
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-outline-primary fw-bold">Learn more!</a>
            <button 
              onClick={() => actions.AddOrDeleteFavorite({...item, type})} 
              className="btn btn-outline-warning"
            >
              <i 
                className={`fa${isFavorite(item) ? 's' : 'r'} fa-heart`}
                style={{ color: isFavorite(item) ? '#ffc107' : 'inherit' }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h1 className="text-danger mb-2">Characters</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.personajes.map(item => renderCard(item, 'character'))}
      </div>

      <h1 className="text-danger mb-2 mt-4">Planets</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.planets.map(item => renderCard(item, 'planet'))}
      </div>

      <h1 className="text-danger mb-2 mt-4">Vehicles</h1>
      <div className="row flex-nowrap overflow-auto">
        {store.vehicles.map(item => renderCard(item, 'vehicle'))}
      </div>
    </>
  );
};