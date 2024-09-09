import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const VehicleDetails = () => {
  const [vehicle, setVehicle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
        const data = await response.json();
        setVehicle(data.result.properties);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    };

    fetchVehicle();
  }, [id]);

  if (!vehicle) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: 'rgb(13, 17, 23)', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
              className="img-fluid"
              alt={vehicle.name}
              onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/800x600?text=Vehicle+Image+Not+Available"}}
            />
          </div>
          <div className="col-md-6">
            <h1>{vehicle.name}</h1>
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
                  <td>{vehicle.name}</td>
                  <th className="text-danger">Vehicle Class:</th>
                  <td>{vehicle.vehicle_class}</td>
                </tr>
                <tr>
                  <th className="text-danger">Length:</th>
                  <td>{vehicle.length}</td>
                  <th className="text-danger">Crew:</th>
                  <td>{vehicle.crew}</td>
                </tr>
                <tr>
                  <th className="text-danger">Passengers:</th>
                  <td>{vehicle.passengers}</td>
                  <th className="text-danger">Max Atmosphering Speed:</th>
                  <td>{vehicle.max_atmosphering_speed}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};