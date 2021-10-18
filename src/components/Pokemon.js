// src/components/Pokemon.js
export default function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "Nope, not really"}</p>
      <p>Terrifying: {props.terrifying ? "Very" : "Nah, lovable"}</p>
      <p>Abilities {props.abilities.length}: </p>
      {/* <ul>
        {props.abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul> */}
      {/* this step above makes the abilities shows in order like list, the step below, makes the number (length) of abilities shows */}
      <ul>
        {props.abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
}
