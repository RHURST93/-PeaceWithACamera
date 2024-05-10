import { useState } from 'react';
import {
    Container,
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
//import UserLoginForm from '../features/user/UserLoginForm'; 
//import NucampLogo from '../app/assets/img/logo.png';
import logo from '../pages/logo.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        
        <Navbar dark color='primary' sticky='top' expand='lg'  >
            <NavbarBrand  href='/'>
                <img src={logo} alt='Nucamp logo' className='float-start mt-1 logo' />
                <h1 className='mt-1 flex h1' >@PeaceWithACamera</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className='nav-link' to='/Album'>
                            <i className='fa fa-book fa-lg' /> Album
                        </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                    <i className="fa fa-phone"  /> Contact Us
                        </NavLink>
                    </NavItem>
                </Nav>
                
            </Collapse>
        </Navbar>
        
        
    )
}

export default Header