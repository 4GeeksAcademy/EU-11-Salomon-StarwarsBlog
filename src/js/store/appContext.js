import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/
		    // Update the API with the modified to-do list whenever todos change
			// fetch("https://swapi.dev/api/people", {
			// 	method: "POST",
			// 	body: JSON.stringify([]),
			// 	headers: {
			// 	  "Content-Type": "application/json"
			// 	}
			//   })
			// 	.then(resp => {
			// 	  console.log(resp.ok); // true if the response is successful
			// 	  console.log(resp.status); // the status code (e.g., 200, 400, etc.)
			// 	  console.log(resp.text()); // the response as text
			// 	  return resp.json(); // parse the response as JSON and return a promise
			// 	})
			// 	.then(data => {
			// 	  console.log(data); // the object received from the server
			// 	})
			// 	.catch(error => {
			// 	  console.log(error); // error handling
			// 	}); This is a fetch I should delete
			state.actions.loadSomeData()
			 }, []);
		  
			// useEffect(() => {
			//   fetch("https://assets.breatheco.de/apis/fake/todos/user/salomon", {
			// 	method: "PUT",
			// 	body: JSON.stringify([{ label: "Make the bed", done: false },
			// 	{ label: "Walk for an hour", done: false },
			// 	{ label: "Do the homework", done: false }]),
			// 	headers: {
			// 	  "Content-Type": "application/json"
			// 	}
			//   })
			// 	.then(resp => {
			// 	  console.log(resp.ok); // true if the response is successful
			// 	  console.log(resp.status); // the status code (e.g., 200, 400, etc.)
			// 	  console.log(resp.text()); // the response as text
			// 	})
			// 	.then(data => {
			// 	  console.log(data); // the object received from the server
			// 	})
			// 	.catch(error => {
			// 	  console.log(error); // error handling
			// 	});
			//   // Fetch the initial to-do list from the API
			//   fetch("https://assets.breatheco.de/apis/fake/todos/user/salomon")
			// 	.then(resp => resp.json())
			// 	.then(data => setTodos(data))
			// 	.catch(error => console.log(error));
			// }, []);
		  

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
