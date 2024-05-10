import Header from "../components/Nav";
import {Container, Col, Row} from 'reactstrap';
import mountains from '../assets/mountains.jpg';
import night from '../assets/night.jpg';
const About = () => {

    return (
        
            <>
                <Container>
                <Col className="mx-2  ">
                <h1 className="flex ">About</h1>
                </Col>
                </Container>
            
                
                <Container fluid= 'md'  className="flex" >
                    <Row>   
                <Col className=" flex mx-auto overflow-hidden"  md='12' lg='12' xl='6' style={{width: 400}}>
            
            <img src={mountains} alt="mountains" className="flex  hidden-overflow" style={{width:400}}/>
            
                </Col>
                <Col className="flex mx-auto overflow-hidden"   md='12' lg='12' xl='6' style={{width: 400}}>
                    <img src={night} className="flex mx-auto  hidden-overflow" alt='mountains at night' style={{width: 400}}/>
                </Col>
                </Row>
                </Container> 
                <Container className="flex" md='6'>
                    <Row>
               
                    </Row>
                </Container>
                <Col md='10' className="ml-4 mr-4 flex mx-auto">
                <p style={{marginLeft: 15, marginRight: 15}} className="flex text-center mt-4 ml-4 mr-4 ">My name is Randy, and I am a nature photographer. I have lived in Oklahoma <br/>
                all of my life, surrounded by the lakes, woods, and hills we hold so dear, <br/>
                however, I wasn't introduced to photography until 2020. I have had many hobbies<br/>
                throughout life, but none come close to how peaceful it is standing in the middle of the woods<br/>
                with a camera strapped on waiting for that perfect shot. I also own the Instagram page, at_peace_with_a_camera.
                <br/>
                
                <br/>
                I am a strong supporter of keeping our environments clean, so that nature can remain as biodiverse as possible in<br/>
                these everchanging times. Listed below, I have included resources on how we can help keep nature pristine.
                
            </p>
                </Col>

                <Col className="text-center">
                    <hr/>
                <h1 className="flex ">Resources</h1>
                </Col>
                <Container className="flex align-items-center">
                    <Row>
                <Col className="flex " md='6'>
                    <ul>
                        <li>Help the bees - </li><a href="https://thebeeconservancy.org/10-ways-to-save-the-bees/">The Bee Conservancy</a>
                        <li>12 ways you can protect the environment - </li><a href="https://www.greenmountainenergy.com/why-renewable-energy/protect-the-environment">We only have one Earth... so let's do right by it!</a>
                    </ul>
                </Col>
                
                
                <Col className="flex align-center" md='6'>
                    <ul>
                        <li>Help the bees - </li><a href="https://thebeeconservancy.org/10-ways-to-save-the-bees/">The Bee Conservancy</a>
                        <li>12 ways you can protect the environment - </li><a href="https://www.greenmountainenergy.com/why-renewable-energy/protect-the-environment">We only have one Earth... so let's do right by it!</a>
                    </ul>
                </Col>
                    </Row>
            </Container>
            
               
            
            
            </>
        
    )
}

export default About;