import React, {useContext} from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
export const Navbar = () => {
    // accdeder propiedades<>store y funciones
    const {store,actions}=useContext(Context)

    return (
        <nav className="navbar navbar-dark mb-3 sticky-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Logo" className="navbar-brand mb-0 h1" style={{ height: '50px', marginLeft: "15px" }} />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" style={{ marginRight: "15px" }} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="badge bg-secondary">{store.favoriteList.length}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        {
                            store.favoriteList.map((item, index) => {
                                return (
                                    <li key={item.id} className="dropdown-item">{item.name}<button 
                                        onClick={()=>actions.deleteFavorite(item)}
                                        className="btn btn-danger btn-sm"
                                        style={{ width: '30px' }} >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
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
