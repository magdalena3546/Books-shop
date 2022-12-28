import {NavLink} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import styles from './NavBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <Navbar className={styles.navBar}>
        <NavLink className={styles.brand} to="/">Bookworm</NavLink>
        <Nav className="ms-auto px-2">
          <NavLink className="mx-2" to="/">Home</NavLink>
          <NavLink to="/cart"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
        </Nav>
    </Navbar>
  )
};

export default NavBar;