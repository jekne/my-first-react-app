import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
      </main>
      <Pokemon
        name="Charizard"
        weight={90}
        awesome={true}
        terrifying={false}
        abilities={["Blaze", "Solar Power", "Tough Claws", "Drought"]}
      />
      {/* <p> Types: {{ fire: true, water: false }}</p> */}
      {/* <p>Abilities: {["Blaze", "Solar power", "Tough claws", "Drought"]}</p> */}
      {/* <div> HELLO WORLD!</div>

      <p> React is cool!</p> */}
      <Pokemon
        name="Bulbasaur "
        weight={6.9}
        awesome={true}
        terrifying={false}
        abilities={["Overgrow", "Chlorophyl"]}
      />
      <Pokemon
        name="Mewtwo"
        weight={122}
        awesome={true}
        terrifying={true}
        abilities={["Pressure", "Unnerve", "Steadfast", "Insomnia"]}
      />
      <Pokemon
        name="Mega beedrill "
        weight={65}
        awesome={false}
        terrifying={true}
        abilities={["Intimidate", "Unnerve"]}
      />
      <div></div>
    </div>
  );
}

export default App;
