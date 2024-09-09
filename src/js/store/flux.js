const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favoriteList: [],
		personajes: [],
		planets: [],
		vehicles: [],
	  },
	  actions: {
		AddOrDeleteFavorite: (item) => {
		  let store = getStore();
		  // item type and uid
		  const uniqueId = `${item.type}_${item.uid}`;
		  let exists = store.favoriteList.some(fav => `${fav.type}_${fav.uid}` === uniqueId);
		  if (exists) {
			let updatedList = store.favoriteList.filter(fav => `${fav.type}_${fav.uid}` !== uniqueId);
			setStore({ favoriteList: updatedList });
		  } else {
			setStore({ favoriteList: [...store.favoriteList, { ...item, uniqueId }] });
		  }
		},
		deleteFavorite: (item) => {
		  const store = getStore();
		  const uniqueId = `${item.type}_${item.uid}`;
		  let updatedList = store.favoriteList.filter(fav => `${fav.type}_${fav.uid}` !== uniqueId);
		  setStore({ favoriteList: updatedList });
		},
		getPeople: async () => {
		  try {
			const res = await fetch("https://www.swapi.tech/api/people");
			const data = await res.json();
			const detailedPeople = await Promise.all(
			  data.results.map(async (person) => {
				const detailRes = await fetch(person.url);
				const detailData = await detailRes.json();
				return {
				  ...person,
				  ...detailData.result.properties,
				  type: 'character' 
				};
			  })
			);
			setStore({ personajes: detailedPeople });
		  } catch (err) {
			console.error(err);
		  }
		},
		getPlanets: async () => {
		  try {
			const res = await fetch("https://www.swapi.tech/api/planets");
			const data = await res.json();
			const detailedPlanets = await Promise.all(
			  data.results.map(async (planet) => {
				const detailRes = await fetch(planet.url);
				const detailData = await detailRes.json();
				return {
				  ...planet,
				  ...detailData.result.properties,
				  type: 'planet' 
				};
			  })
			);
			setStore({ planets: detailedPlanets });
		  } catch (err) {
			console.error(err);
		  }
		},
		getVehicles: async () => {
		  try {
			const res = await fetch("https://www.swapi.tech/api/vehicles");
			const data = await res.json();
			const detailedVehicles = await Promise.all(
			  data.results.map(async (vehicle) => {
				const detailRes = await fetch(vehicle.url);
				const detailData = await detailRes.json();
				return {
				  ...vehicle,
				  ...detailData.result.properties,
				  type: 'vehicle'
				};
			  })
			);
			setStore({ vehicles: detailedVehicles });
		  } catch (err) {
			console.error(err);
		  }
		},
		getPlanetDetails: async (id) => {
			try {
			  const res = await fetch(`https://www.swapi.tech/api/planets/${id}`);
			  const data = await res.json();
			  return data.result.properties;
			} catch (err) {
			  console.error(err);
			}
		  },
		
	  }
	};
  };
  
  export default getState;