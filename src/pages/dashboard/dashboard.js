import Waitinglobby from "../../components/waitinglobby/waitinglobby";
import SecondHeader from "../../components/header/secondHeader";
import Startmusic from "../../components/Startmusic/Startmusic";
const  Dashboard=()=>{
    return (
        <div>
      <SecondHeader title="Join Room"/>
      <Waitinglobby />
      <Startmusic/>
      </div>
    )
}

export default Dashboard