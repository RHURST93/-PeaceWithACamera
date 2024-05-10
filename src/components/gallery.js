import 'lightbox.js-react/dist/index.css'
import { useEffect } from 'react';
import { Container } from 'reactstrap';
import Carouselpic from '../assets/Carouselpic.jpg';
import Carouselpic2 from '../assets/Carouselpic2.jpg';
import Carouselpic3 from '../assets/Carouselpic3.jpg';
import carouselpic4 from '../assets/carouselpic4.jpg';
import carouselpic5 from '../assets/carouselpic5.jpg';
import carouselpic6 from '../assets/carouselpic6.jpg';
import carouselpic7 from '../assets/carouselpic7.jpg';
import carouselpic8 from '../assets/carouselpic8.jpg';
import carouselpic9 from '../assets/carouselpic9.jpg';
import carouselpic10 from '../assets/carouselpic10.jpg';
import carouselpic11 from '../assets/carouselpic11.jpg';
import carouselpic12 from '../assets/carouselpic12.jpg';
import Hawk from '../assets/Hawk.jpg';
import HerronFish from '../assets/HerronFish.jpg'
import cardinal from '../assets/cardinal.jpg';
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'



  const Gallery = () => {
useEffect(() => {
    initLightboxJS('APIKEY', "LEVEL");
  });
    return (
        
        <SlideshowLightbox className='container-fluid sm:grid-cols-6  mx-3   md:grid-cols-12 lg: grid-cols-12 ' showThumbnails={true}>
  <img loading='lazy' className='w-full '  src={Carouselpic} width={300} alt='Blue herron skimming the lake with its wing as light dissapears'/>
  <img loading='lazy' className='w-full' src={carouselpic7} width={300} alt='White feather partialy covered by sand'/>  
  <img loading='lazy' className='w-full' src={Carouselpic3} width={300} alt='Mallard duck swimming face-on' />
  <img loading='lazy' className='w-full' src={carouselpic4} width={300} alt='highly detailed butterfly in flight'/>
  <img loading='lazy' className='w-full' src={carouselpic8} width={300} alt='white pelican prepares to take flight as Blue herron looks on'/>
  <img loading='lazy' className='w-full' src={carouselpic9} width={300} alt='A brown thrasher perched atop twigs'/>
  <img loading='lazy' className='w-full' src={carouselpic10} width={300} alt='A Scissortail is perched atop a single stem' />
  <img loading='lazy' className='w-full' src={carouselpic11} width={300} alt='duck posed face-on in pond' />
  <img loading='lazy' className='w-full' src={cardinal} width={300} alt='cardinal bracing itself on side of cardoor looking in passenger side mirror'/>
  <img loading='lazy' className='w-full' src={carouselpic12} width={300} alt='mallard swimming in a pond'/>
  <img loading='lazy' className='w-full' src={Hawk} width={300} alt='redtailed hawk perched closeup'/>
  <img loading='lazy' className='w-full' src={HerronFish} width={300} alt='herron with a fish on its beak that it speared'/>

</SlideshowLightbox> 
    )
  }

export default Gallery;