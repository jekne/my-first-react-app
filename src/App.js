// import "./App.css";
// import Title from "./components/Title";
// import Pokemon from "./components/Pokemon";

// const all_pokemon = [
//   { name: "Charizard", weight: 90 },
//   { name: "Bulbasaur", weight: 6.9 },
//   { name: "Mewtwo", weight: 122 },
//   { name: "Mega beedrill", weight: 65 },
// ];

// const res = all_pokemon.map((pokemon) => {
//   return `${pokemon.name}: ${pokemon.weight}`;
// });

// console.log(res);
// // This console.log it is just to show on the console inside the page

// function App() {
//   return (
//     <div className="App">
//       {all_pokemon.map((pokemon) => {
//         return ` Name :${pokemon.name}, Weight: ${pokemon.weight}Kg`;
//       })}
//       {/* to bring the solution to the page local hots 3000 actually you bring the function inside the app */}

//       <main>
//         <Title content="Some Simple Title" />
//       </main>
//       <div></div>
//       <div>
//         <Pokemon
//           name="Charizard"
//           weight={90}
//           awesome={true}
//           terrifying={false}
//           abilities={["Blaze", "Solar Power", "Tough Claws", "Drought"]}
//         />
//         {/* <p> Types: {{ fire: true, water: false }}</p> */}
//         {/* <p>Abilities: {["Blaze", "Solar power", "Tough claws", "Drought"]}</p> */}
//         {/* <div> HELLO WORLD!</div>

//       <p> React is cool!</p> */}
//         <Pokemon
//           name="Bulbasaur "
//           weight={6.9}
//           awesome={true}
//           terrifying={false}
//           abilities={["Overgrow ", "Chlorophyl"]}
//         />
//         <Pokemon
//           name="Mewtwo"
//           weight={122}
//           awesome={true}
//           terrifying={true}
//           abilities={["Pressure", "Unnerve", "Steadfast", "Insomnia"]}
//         />
//         <Pokemon
//           name="Mega beedrill "
//           weight={65}
//           awesome={false}
//           terrifying={true}
//           abilities={["Intimidate", "Unnerve"]}
//         />
//         <p></p>
//       </div>
//     </div>
//   );
// }

// export default App;
//  the part above it is with the pokemons inside the div, now bellow will be outside
// src/App.js
import "./App.css";

import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

// const placeAllPokemons = all_pokemon.map((Pokemon) => {
//   return `${Pokemon.name} ${Pokemon.weight} ${Pokemon.awesome} ${Pokemon.terrifying} ${Pokemon.abilities} `;
// });

function App() {
  return (
    <main className="container">
      {/* this container make the screen appear side to side */}
      <Title content="Some Simple Title" />
      <div className="row">
        {all_pokemon.map((pokemon, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
export default App;
