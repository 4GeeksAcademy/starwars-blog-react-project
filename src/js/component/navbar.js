import React, {useContext} from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
export const Navbar = () => {
    // accdeder propiedades<>store y funciones
    const {store,actions}=useContext(Context)

    return (
        <nav className="navbar navbar-dark mb-2 sticky-top" style={{ backgroundColor: '#010409' }}>
            <div className="container">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Logo" className="navbar-brand mb-0 h1" style={{ height: '50px', marginLeft: "15px" }} />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn dropdown-toggle" style={{ backgroundColor: '#5a23c8' ,color: 'white'}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="badge bg-secondary">{store.favoriteList.length}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton" style={{ backgroundColor: '#5a23c8' ,color: 'white',width: '200px'  }}>
                        {
                            store.favoriteList.map((item, index) => {
                                return (<li key={item.id} className="dropdown-item" style={{ color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px' }}>
      <span>{item.name}</span>
      <button 
        onClick={() => actions.deleteFavorite(item)}
        className="btn btn-danger btn-sm"
        style={{ width: '30px', padding: '2px', marginLeft: '8px' }}>
        <i className="fas fa-trash"></i>
      </button>
    </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    );
};









































// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-dark mb-3">
// 			<Link to="/">
// 				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 			</Link>
// 			<div className="ml-auto">
// 				<Link to="/demo">
// 					<button className="btn btn-primary">Favorite</button>
// 				</Link>
// 			</div>
// 		</nav>
// 	);
// };
