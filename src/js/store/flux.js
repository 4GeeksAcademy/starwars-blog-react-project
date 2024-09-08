const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favoriteList: [],
		personajes: [],
		planets: [],
	  },
	  actions: {
		AddOrDeleteFavorite: (item) => {
		  let store = getStore();
		  let exists = store.favoriteList.some(fav => fav.uid === item.uid);
		  if (exists) {
			let updatedList = store.favoriteList.filter(fav => fav.uid !== item.uid);
			setStore({ favoriteList: updatedList });
		  } else {
			setStore({ favoriteList: [...store.favoriteList, item] });
		  }
		},
		deleteFavorite: (item) => {
		  const store = getStore();
		  let updatedList = store.favoriteList.filter(fav => fav.uid !== item.uid);
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
				  ...detailData.result.properties
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
				  ...detailData.result.properties
				};
			  })
			);
			setStore({ planets: detailedPlanets });
		  } catch (err) {
			console.error(err);
		  }
		},
	  }
	};
  };
  
  export default getState;
