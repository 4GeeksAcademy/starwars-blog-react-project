import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Details } from "./views/details";
import injectContext from "./store/appContext";
// import { Personajes } from "./component/personajes";
// import { Cartas } from "./component/card";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	// const personajes = ["Luke Skywalker","C-3PO","plmkij","zxcvbbn","asdfg"];
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* componente */}
					{/* <Navbar /> */}
					<Routes>
					{/* vista que nos van a redirigir a otra ruta */}
						{/* <Personajes> */}
						<Route path="/" element={<Home/>}/>
						{/* </Personajes> */}
						{/* <Route path="/details" element={<Details />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} /> */}
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
