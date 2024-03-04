import Badge from 'react-bootstrap/Badge';

const Tags=({color, text}) => {
  return (
    <>
       <Badge bg={color}>{text}</Badge>
    
    </>
  );
}

export default Tags;