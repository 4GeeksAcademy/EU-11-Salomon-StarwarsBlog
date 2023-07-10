import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const StarWarsCharacter = (props) => {
const { charId } = useParams();
const { store, actions } = useContext(Context);

console.log(charId, typeof charId);
console.log(store.people);

const person = store.people.find((person) => person.uid === charId);

return <p>{person.name}</p>;
};