import Link from "react-router-dom/Link"
import Container from 'react-bootstrap/Container'
import SecondHeader from "../../components/header/secondHeader"
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
const JoinRoom = () => {
    return (

        <>
            <SecondHeader title="Join Room" />
            
            <h1>Coming Soon!</h1>

            <Link to={'/'}> <Container><Button size='lg' variant ='info'>Go Back</Button></Container></Link>

        </>
    )
}

export default JoinRoom
