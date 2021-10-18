// src/components/Pokemon.js
export default function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "Nope, not really"}</p>
      <p>Terrifying: {props.terrifying ? "Very" : "Nah, lovable"}</p>
      <p>Abilities: {props.abilities}</p>
    </div>
  );
}
