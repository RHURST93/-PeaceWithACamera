import {Card, CardBody, CardImg, CardText, CardTitle, CardImgOverlay} from 'reactstrap';
import carouselpic from '../assets/Carouselpic.jpg';
import carouselpic2 from '../assets/Carouselpic2.jpg';
import carouselpic3 from '../assets/Carouselpic3.jpg';
import carouselpic4 from '../assets/carouselpic4.jpg';
import carouselpic5 from '../assets/carouselpic5.jpg';
import carouselpic6 from '../assets/carouselpic6.jpg';
import carouselpic7 from '../assets/carouselpic7.jpg';
import carouselpic8 from '../assets/carouselpic8.jpg';
import carouselpic9 from '../assets/carouselpic9.jpg';
import carouselpic10 from '../assets/carouselpic10.jpg';
import carouselpic11 from '../assets/carouselpic11.jpg';
import carouselpic12 from '../assets/carouselpic12.jpg';
import {Divider, useEffect, useState} from 'react'
import {Container, Col, Row} from 'reactstrap';
import Header from '../components/Nav';
import Hawk from '../assets/Hawk.jpg';
import HerronFish from '../assets/HerronFish.jpg';
//import PhotoAlbum from "react-photo-album";
//import PhotoAlbum from "react-photo-album";
//import photos from '../pages/photos';
//import Gallery from 'react-photo-gallery;
import 'lightbox.js-react/dist/index.css'
//import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import Gallery  from '../components/gallery';
const Album = () => {
   
   
    return(
        <>
        <Container fluid>
        <h1 className='mx-3 '>Album</h1>
        </Container>
        
        
        
        <Gallery/>
        </>
    )



}


export default Album;