import './App.css';
import Header from "./Components/Header/Header";
import FirstSector from "./Components/FirstSector/FirstSector";
import SectorTwo from "./Components/SectorTwo/SectorTwo";
import SectorThree from "./Components/SectorThree/SectorThree";
import AnimationLine from "./Components/AnimationLine/AnimationLine";

function App() {
  return (
    <div className={'container'}>
      <Header/>
        <FirstSector/>
        <SectorTwo/>
        <SectorThree/>
        <AnimationLine/>
    </div>
  );
}

export default App;
