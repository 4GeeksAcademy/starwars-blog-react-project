const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoriteList:[],
			// entre props coma
			personajes: []
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}

			// ],

		},
		actions: {	
			// capturando item
			AddOrDeleteFavorite: (item) =>{
				let recuperandoStore = getStore()
				// find: revisa element por elemento si existe, devuele el elemento si o si existe
				let result = recuperandoStore.favoriteList.find((e)=> e.uid===item.uid );
				// result <> truty si se cumple e.uid===item.uid
				if(result){
					let favoriteFilter = recuperandoStore.favoriteList.filter(e =>  e.uid !== item.uid )

					setStore({...getStore(), favoriteList: favoriteFilter})

				}else{
					// recuperando "...getStore()" (solos sus propiedades y valores de getStore y todo getStore() ) 
					setStore({...getStore(),favoriteList: [...getStore().favoriteList, item]})//...getStore().favoriteList accdede a la lista
											//favoriteList remplaza al anterior
					// setStore({...getStore(),favoriteList: [...getStore().favoriteList, item]})
				}
				

			},
			deleteFavorite: (item) => {
				//           {        }
				const store = getStore()
				//                     [                ]
				const listaFavoritos = store.favoriteList
				//                                                 3   !==  1 
				let arrayFiltrado = listaFavoritos.filter((e) => e.uid !== item.uid)
				// [ {name:"Luke", uid:2},{name:"Chubaca", uid:3} ]
				setStore({...getStore(),favoriteList:arrayFiltrado})
				
				
			  },




			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPeople: () => {

				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => {
						setStore({personajes: data.results})
						console.log(getStore().personajes[0]);
	
					})
					.catch(err => console.error(err))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
