import Card from 'react-bootstrap/Card';
import Tags from "./Tags";

const MyCard = ({image, name ,description, color, text}) => {
    return (
        <div className='my-card'>
        <Card style={{width:"18rem"}}>
            <Card.Img className="img" variant="top" src={image}/>
            <Card.Body className='textCard'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div>
                <Tags  color={color} text={text} />
                </div>
            </Card.Body>
        </Card>
        </div>
    );
} ;

export default MyCard;