import React, { useContext} from "react"; //useEffect
import { Cartas } from "../component/card";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

export const Home = () => {
	// store:propiedades actions:funciones
const {store, actions} = useContext(Context)

	return (
		<>
		{/* <h1>qwerty</h1> */}
			<Navbar /> 
			<div className="container-fluid">
            	<h1 className="text-danger mb-2">Characters</h1>
				<Cartas/>
			</div>
				{/* <div className="d-flex flex-row justify-content-center">
					
					{store.personajes.map((item, index) =>
						<Cartas key={index} personajes={item} />
					)}
				</div>  */}
			{/* <Footer /> */}
		</>

	)
};
