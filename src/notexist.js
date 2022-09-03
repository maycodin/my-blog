import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotExist = () => {
    return (
         <div className="not-exist">
            <h2>SORRY!</h2>
            <p>This page does not exist</p>
            <Link to="/">HOME</Link>

        </div> 
    );
}
 
export default NotExist;