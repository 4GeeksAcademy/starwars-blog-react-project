import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const PlanetDetails = () => {
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
        const data = await response.json();
        setPlanet(data.result.properties);
      } catch (error) {
        console.error("Error fetching planet data:", error);
      }
    };

    fetchPlanet();
  }, [id]);

  if (!planet) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: 'rgb(13, 17, 23)', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-5">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              className="img-fluid"
              style={{ height: 380 }}
              alt={planet.name}
              onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/800x600?text=Planet+Image+Not+Available"}}
            />
          </div>
          <div className="col-md-6">
            <h1>{planet.name}</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
              enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <table className="table table-borderless text-white">
              <tbody>
                <tr className="border-top border-danger">
                  <th className="text-danger">Name:</th>
                  <td>{planet.name}</td>
                  <th className="text-danger">Climate:</th>
                  <td>{planet.climate}</td>
                </tr>
                <tr>
                  <th className="text-danger">Population:</th>
                  <td>{planet.population}</td>
                  <th className="text-danger">Orbital Period:</th>
                  <td>{planet.orbital_period}</td>
                </tr>
                <tr>
                  <th className="text-danger">Rotation Period:</th>
                  <td>{planet.rotation_period}</td>
                  <th className="text-danger">Diameter:</th>
                  <td>{planet.diameter}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};