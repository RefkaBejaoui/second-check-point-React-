//Create a file called Player.js which contains the player component.
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Player = ({name , team, nationality,jerseyNumber , age , ImageURL})=>{

  return (
    <Card style={{ width: '18rem',border:'black 3px solid' }}>
      <Card.Img variant="top" src={ImageURL} style={{width:280 , height:150 , margin:2 }} />
      <Card.Body>
        <Card.Title>Name : {name}</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> Age :{age} years old</ListGroup.Item>
        <ListGroup.Item>Jersey Number : {jerseyNumber}</ListGroup.Item>
        <ListGroup.Item>Nationality :{nationality}</ListGroup.Item>
        <ListGroup.Item>Team : {team}</ListGroup.Item>
      </ListGroup>
      <Card.Body className='bg-dark' >
        <Card.Link  style={{ color: "whitesmoke" , fontWeight:"bold"}} href={ImageURL}>{name}-photo</Card.Link>
      </Card.Body>
    </Card>
  );
}
Player.defaultProps = {
  name : "Refka",
  age : 35,
  jerseyNumber :1,
  nationality : "tunisian",
  ImageURL : "",
  team : "CA"
}
export default Player