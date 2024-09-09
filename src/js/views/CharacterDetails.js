import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
        const data = await response.json();
        setCharacter(data.result.properties);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div style={{ backgroundColor: 'rgb(13, 17, 23)', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-5">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              className="img-fluid"
              style={{ height: 380 }}
              alt={character.name}
              onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/800x600?text=Character+Image+Not+Available"}}
            />
          </div>
          <div className="col-md-6">
            <h1>{character.name}</h1>
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
                  <td>{character.name}</td>
                  <th className="text-danger">Birth Year:</th>
                  <td>{character.birth_year}</td>
                </tr>
                <tr>
                  <th className="text-danger">Gender:</th>
                  <td>{character.gender}</td>
                  <th className="text-danger">Height:</th>
                  <td>{character.height}</td>
                </tr>
                <tr>
                  <th className="text-danger">Skin Color:</th>
                  <td>{character.skin_color}</td>
                  <th className="text-danger">Eye Color:</th>
                  <td>{character.eye_color}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};