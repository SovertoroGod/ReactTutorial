import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h1>Sorry ... :(</h1>
            <p>That page is not found !</p>
            <div className="atext">
                <Link to="/">back to Home Page ...</Link>
            </div>
            
        </div>
    );
}
 
export default NotFound;