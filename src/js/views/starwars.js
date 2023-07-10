import React, { useEffect } from "react"; 
import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const StarWars = (props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
    .then((result) => result.json())
    .then((data) => {
        actions.setPeopleData(data.results);
        console.log(data)
    });
}, []);

return (
    <div>
        {store.people.map((person) => (
            <p>
            <Link key={person.uid} to={"/starwars/character/"+person.uid}>{person.name}</Link>
            </p>
        ))}
    </div>
    );
 };