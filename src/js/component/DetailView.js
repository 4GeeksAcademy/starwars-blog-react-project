// DetailView.js
/* import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailView = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      if (params.type && params.id) {
        const result = await actions.getItemDetails(params.type, params.id);
        setItem(result);
      }
    };
    fetchItem();
  }, [params.type, params.id, actions]);

  if (!item) return <div>Loading...</div>;

  const getProperties = () => {
    switch (params.type) {
      case 'character':
        return [
          { label: 'Name', value: item.name },
          { label: 'Birth Year', value: item.birth_year },
          { label: 'Gender', value: item.gender },
          { label: 'Height', value: item.height },
          { label: 'Skin Color', value: item.skin_color },
          { label: 'Eye Color', value: item.eye_color },
        ];
      case 'planet':
        return [
          { label: 'Name', value: item.name },
          { label: 'Climate', value: item.climate },
          { label: 'Population', value: item.population },
          { label: 'Orbital Period', value: item.orbital_period },
          { label: 'Rotation Period', value: item.rotation_period },
          { label: 'Diameter', value: item.diameter },
        ];
      case 'vehicle':
        return [
          { label: 'Name', value: item.name },
          { label: 'Model', value: item.model },
          { label: 'Length', value: item.length },
          { label: 'Crew', value: item.crew },
          { label: 'Passengers', value: item.passengers },
          { label: 'Max Atmosphering Speed', value: item.max_atmosphering_speed },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="container">
      <Link to="/" className="btn btn-light my-3">Back to home</Link>
      <div className="card mb-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={`https://starwars-visualguide.com/assets/img/${params.type}s/${params.id}.jpg`}
              alt={item.name}
              className="img-fluid rounded-start"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur
              </p>
              <table className="table">
                <tbody>
                  {getProperties().map((prop, index) => (
                    <tr key={index}>
                      <th scope="row">{prop.label}</th>
                      <td>{prop.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; */