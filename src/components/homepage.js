import {Container, Col, Row} from 'reactstrap';
import ControlledCarousel from '../components/carousel';
import nikon from '../assets/nikon.jpeg';


const Homepage = () => {
  
  
    return(
        <>

        <Container className='flex'>
      <Row>
        <Col className='mt-4'>
        <h1 className='inline-block text-center'>Hello and welcome to my site where I give everyone a unique <br></br>
        <h1 className='inline-block text-center mb-4'>perspective of wildlife.</h1> 
            
        </h1>
        
        </Col>
      </Row>
    </Container>
    
    
    <Container  >
      <Row>
        <Col>
        
        </Col>
      </Row>
    </Container>
    <ControlledCarousel />
    <hr className='mt-4'/>
    <Container className='flex'>
      <Row>
        <Col className=' mb-4' >
        <h1 className='text-center'>My Equipment</h1>
        </Col>
        
      </Row>
      <Row>
        <Col>
        
        <img 
            src={nikon} 
            className='flex rounded' 
            width={240} style={{}}
        />
                    
        </Col>
      <Col className='flex mt-4'>
        <ul>
          <h3>Camera</h3>
          <li style={{fontWeight: 'bold'}}>Nikon Z-7</li>
          <h6 className='d-inline-block' style={{fontSize: 10}}>45.7 mp mirrorless</h6>
          <h6 className='d-inline-block' style={{fontSize: 10}}>64 - 25,600 ISO</h6>
          <hr/>
          <h3>Lens</h3>
          <li style={{fontWeight: 'bold'}}>Nikor 200 - 500mm Telephoto lens</li>
          <h6 className="d-inline-block"style={{fontSize: 10}}>4.5 stops of vibration reduction image stabilization.</h6>
          <h6 className='d-inline-block' style={{fontSize: 10}}>Fast 5.6 aperture. </h6>
          <hr/>
          
          <h3>Accesseries</h3>
          <li style={{fontWeight: 'bold'}}>Battery Grip</li>
          <h6 className='d-inline-block' style={{fontSize:10}}>Battery grips allow me to get the perfect angle on the shot<br/>
          I am trying to achieve no matter what angle or orientation I am needing the photo.</h6>
          <li style={{fontWeight: 'bold'}}>Nikon F Mount Converter</li>
          <h6 className='d-inline-block' style={{fontSize:10}}>This converter allows me to use an F mount lens on my <br/>Z-mount camera. The F-mount is the mount used in the DSLR line of cameras. My Camera is the newer mirrorless type.</h6>
        </ul>
        
          

                      
        
        
        </Col>
        
        
      </Row>
      <hr/>
    </Container>
    
        </>
    )
}

export default Homepage;