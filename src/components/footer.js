import { Container, Row, Col } from 'reactstrap';
import leaves from '../assets/leaves.jpg';
import CurrentYear from './currentYear';
import { Link } from 'react-router-dom';
const hello = {
    title: 'helo',
    name: 'goodbye',

}
const Footer = () => {
   

        
    
    return (
        <footer className='site-footer'>
            <div >
            </div>
            <Container style={{backgroundImage: require('../assets/leaves.jpg')}} className=''>
                <Row>
                <Col xs='6'sm='4' md='3' className='text-center  ' >
                    <Link className='text-center text-light d-flex text-decoration-none' to='/'>Home</Link>
                    <Link className='text-center text-light d-flex text-decoration-none' to='/Album'>Album</Link>
                    <Link className='text-center text-light d-flex text-decoration-none' to='/about'>About</Link>
                    <Link className='text-center text-light d-flex text-decoration-none center' to='/contact'>Contact Us</Link>
                    </Col>
                    <Col xs='6' sm='4' md='6'className=' text-center '>
                        <h5 className='text-light text-center'>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram '
                            href='https://www.instagram.com/at_peace_with_a_camera/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        
                    </Col>
                    <Col sm='4'md='3'  className='text-center mx-auto '>
                        <a
                            role='button'
                            className='btn btn-link text-light text-decoration-none text-center '
                            href='tel:+19184211242'
                        >
                            <i className='fa fa-phone' /> 1-918-421-1242
                        </a>
                        
                        <a
                            role='button'
                            className='btn btn-link text-light text-decoration-none text-center '
                            href='mailto:rahurst93@gmail.com'
                        >
                            <i className='fa fa-envelope-o ' /> Rahurst93@gmail.com
                        </a>
                    </Col>
                    <Col xs='12' sm='12' md='12' lg='12' className='text-center'>
                    <h6 className='text-light text-center'>&copy; {CurrentYear()} Randy Hurst. All rights reserved.</h6>


                    </Col>
                </Row>
            </Container>

        </footer>
    );
};

export default Footer;