const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				people: [],
					},
		actions: {
			// Use getActions to call a function within a fuction
				setPeopleData: (results) => {
					const store = getStore();

					setStore({ ...store, people: results });
					},

				setPersonData: (uid, properties) => {
					const store = getStore();
					const newPeopleArray = store.people.map(person => {
					if(person.uid === uid) {
						person.properties = properties;
					}
					return person;
				})

				setStore({ ...store, people: newPeopleArray})
			},

				deleteListItem: (id) => {
					const store = getStore();
					

					const filteredDemos = store.demo.filter((item) => item.id !== id);

					setStore({ demo: filteredDemos });
				},
				setDemoList: (demoList) => {
					setStore({ demo: demoList });
				},
				
				// const newPeopleArray = store.people.map(person => {
				// 	if(person.uid === uid) {
				// 		person.properties = properties;
				// 	}
				// 	return person;
				// })
				// setStore({ ...store, people: newPeopleArray});
		},
	};
};

export default getState;
