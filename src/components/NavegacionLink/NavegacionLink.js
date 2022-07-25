import './NavegacionLink.css';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
function NavegacionLink(props){
    return(
        // <li className=" link">{props.title}/>;
        
            <Nav.Link className='mt-3'>
                <NavLink activeClassName='active' className="link" to={props.link}>{props.title} </NavLink>
            </Nav.Link>
      
        
    );
}

export default NavegacionLink;

