import './App.css';
import Header from "./Components/Header/Header";
import FirstSector from "./Components/FirstSector/FirstSector";
import SectorTwo from "./Components/SectorTwo/SectorTwo";
import SectorThree from "./Components/SectorThree/SectorThree";
import AnimationLine from "./Components/AnimationLine/AnimationLine";
import OurTeachers from "./Components/OurTeachers/OurTeachers";
import Gallery from "react-photo-gallery";
import item1 from "./Rectangle 21.jpg";
import item2 from "./assets/img/item2.svg";
import item3 from "./assets/img/item3.svg";
import item4 from "./assets/img/item4.svg";
import item5 from "./assets/img/item5.svg";
import item6 from "./assets/img/item6.svg";
import item7 from "./assets/img/item7.svg";
import item8 from "./assets/img/item8.svg";

const Photo=[
      {
        src: 'https://socket.dev/images/logo-280x80.png',
        width: 10,
        height: 1
      },
];
function App() {
  return (
    <div className={'container'}>
      <Header/>
        <FirstSector/>
        <SectorTwo/>
        <SectorThree/>
        <AnimationLine/>
        <OurTeachers/>
      <Gallery photos={Photo}/>
    </div>
  );
}

export default App;
