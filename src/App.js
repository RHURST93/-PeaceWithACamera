import React from 'react';
import { Container, Col, Row, Navbar, NavbarBrand, NavItem, Carousel } from 'reactstrap';
//import NucampLogo from './app/assets/img/logo.png';
import {BrowserRouter, NavLink} from 'react-router-dom';
import './App.css';
import logo192 from './pages/logo192.png'
import Header from './components/Nav'
import Homepage from './components/homepage'
import Home from './pages/Main'
import About from './pages/about';
import {createBrowserRouter} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom';
import Carouselpage from './components/carousel';
//import Album from './pages/Album';
//import Root from "./routes/root";
import Album from './pages/Album';
import ContactForm from './pages/Contact';
import Footer from './components/footer';
import Breadcrumbs from './components/breadcrumb';

function App() {
    return (
        <div className='App'>
          
          
            <BrowserRouter>
            <Header/>
            <Breadcrumbs/>

            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='album' element={<Album/>} />
            <Route path='contact' element={<ContactForm/>} />
            </Routes>
            <Footer />
        
            </BrowserRouter>
            
           
        
        </div>
    );
}



export default App;