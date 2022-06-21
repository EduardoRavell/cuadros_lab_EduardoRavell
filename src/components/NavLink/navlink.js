import './navlink.css';
import Nav from 'react-bootstrap/Nav';
function NavLink(props){
    return(
        // <li className=" link">{props.title}/>;
        
            <Nav.Link href={props.link} className="link">{props.title} </Nav.Link>
      
        
    );
}

export default NavLink;

