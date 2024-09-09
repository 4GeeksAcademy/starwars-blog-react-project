import React, { useContext} from "react"; //useEffect
import { Cartas } from "../component/card";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
export const Home = () => {
	// store:propiedades actions:funciones
const {store, actions} = useContext(Context)

	return (
		<div style={{ backgroundColor: '#0d1117' }}>
		{/* <h1>qwerty</h1> */}
			<Navbar /> 
			<div className="container">
				<Cartas/>
			</div>
				{/* <div className="d-flex flex-row justify-content-center">
					
					{store.personajes.map((item, index) =>
						<Cartas key={index} personajes={item} />
					)}
				</div>  */}
			<Footer />
		</div>

	)
};
