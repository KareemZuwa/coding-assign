import { useLocation } from 'react-router-dom';
import { Node } from '../models/Node';

interface LocationState {
  person: Node;
}

function Main() {
  let location = useLocation();
  const { person } = location.state as LocationState;

  return (
    <div className="main">
      <div className="main-content">
        <h1 key={person.id}>{person.name}</h1>
      </div>
      
    </div>
  )
}

export default Main