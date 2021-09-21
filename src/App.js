import "./App.css";
import Heading from "./components/header/heading";
import Roomcards from "./components/roomcards/roomcards";
import PlayButton from "./components/playButton/playButton";


function App() {
  return (
    <div className= "App">
      <Heading />
      <Roomcards />
      <PlayButton />
      
    </div>
  );
}

export default App;
