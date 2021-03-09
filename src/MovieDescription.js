import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieDescription = ({match}) => {
   console.log({match});
    return (
      <div>
        <div class="MvDesc">
            <h1 style={{fontSize: '40px', fontWeight: '700'}}>{match.params.title}</h1>
            <p>{match.params.description}</p>
            <iframe style={{width: '550px', height: '300px'}} src={"https://www.youtube.com/embed/" + match.params.video}></iframe> <br/>
          <Link to="/">
            <Button variant="primary">Back</Button>
          </Link>
        </div>
      </div>
    );
  }

export default MovieDescription;
