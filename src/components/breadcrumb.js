import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Col, Row, Container} from 'reactstrap'
import {Link, useLocation} from 'react-router-dom';
const Breadcrumbs = (props) => {
  const location = useLocation();
    return (
        <>
        
  <Container className='d-flex'>
    <Row>
        <Col className='d-flex'>
  <Breadcrumb className="ml-4">
    <BreadcrumbItem active >
      <Link  style={{textDecoration: 'none'}} to="/" className="breadcrumb">
        Home
      </Link>
    </BreadcrumbItem>
    <BreadcrumbItem >
      <Link  style={{textDecoration: 'none'}} to="album" className="breadcrumb" >
        Album
      </Link>
    </BreadcrumbItem>
    <BreadcrumbItem >
     <Link  style={{textDecoration: 'none'}} to='about' className="breadcrumb" >About</Link> 
    </BreadcrumbItem>
    <BreadcrumbItem>
        <Link  style={{textDecoration: 'none'}} to="contact" className="breadcrumb" >Contact Us</Link>
    </BreadcrumbItem>
  </Breadcrumb>
  </Col>
  </Row>
  </Container>
        </>
    )
}

export default Breadcrumbs;