
import Link from 'react-router-dom/Link'
import SecondHeader from '../../components/header/secondHeader'


const CreateRoom =()=>
{
    return( 
    <>
    <SecondHeader title="Create Room"/>
   
    
    
      <Link to={'/'}> Go Back</Link>

    </>
    )
}

export default CreateRoom