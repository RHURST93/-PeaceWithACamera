import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Carouselpic from '../assets/Carouselpic.jpg';
import Carouselpic2 from '../assets/Carouselpic2.jpg';
import Carouselpic3 from '../assets/Carouselpic3.jpg';
import Caroueselpic4 from '../assets/carouselpic4.jpg'
import Caroueselpic5 from '../assets/carouselpic5.jpg'
import Caroueselpic6 from '../assets/carouselpic6.jpg'
import Caroueselpic7 from '../assets/carouselpic7.jpg'
import Caroueselpic8 from '../assets/carouselpic8.jpg' 
import Caroueselpic9 from '../assets/carouselpic9.jpg';
import Hawk from '../assets/Hawk.jpg';
import {Col, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Container  style={{backgroundColor: 'black', height:600, }}>
    
      <div style={{paddingTop:140}}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            backgroundColor: 'white',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            fontWeight: 'bold',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            marginTop: 0,
            marginLeft: 10,
            
          },
          children:<span>{"➤"}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            backgroundColor: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            fontWeight: 'bold',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            marginTop: 0,
            marginRight: 10,
            
            
            rotate: '180deg'
          },
          children:<span>{"➤"}</span>,
          
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 468,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
       
       
       
        <div style={{ width: 400, height: 300 , alignItems:'center'}}>
          <img className='' src={Carouselpic} style={{width: 400, height: 300}} alt='Blue herron at sunset skimming the dimly lit water'/>
        </div>
        <div style={{ width: 400, height: 300 }}>
          <img className='' src={Carouselpic2} style={{width: 400, height: 300, marginLeft: ''}} alt='Duck splashing in a pond' />
        </div>
        <div style={{ width: 400, height: 300 }}>
          <img src={Carouselpic3} style={{width: 400, height: 300}} alt='Mallard duck swimming face-on' />
        </div>
        <div style={{ width: 400, height: 300 }}>
          <img src={Hawk} style={{width: 400, height: 300}} alt='Side profile of a redtailed hawk'/>
        </div>
        <div style={{ width: 400, height: 300}}>
        <img src={Caroueselpic4} style={{width: 400, height: 300}} alt='highly detailed photo of a butterfly in flight'/>
        </div>
        <div style={{ width: 400, height: 300 }}>
        <img src={Caroueselpic5} style={{width: 400, height: 300}} alt='Spider camoflouged against tree bark'/>
        </div>
        <div style={{ width: 400, height: 300 }}>
        <img src={Caroueselpic6} style={{width: 400, height: 300}} alt='herrons having a dispute with a gull as a white pellican looks on'/>
        </div>
        <div style={{ width: 400, height: 300 }}>
        <img src={Caroueselpic7} style={{width: 400, height: 300}} alt='A white feather partly covered by sand'/>
        </div>
        <div style={{ width: 400, height: 300 }}>
        <img src={Caroueselpic9} style={{width: 400, height: 300}} alt='A brown-thrasher perched atop twigs'/>
        </div>
        <div style={{ width: 400, height: 300 }}>
        <img src={Caroueselpic8} style={{width: 400, height: 300}} alt='A white pellican about to take flight as a Blue herron looks on' />
        </div>
        
      </ReactSimplyCarousel>
      
      </div>
    </Container>
  );
}

export default ReactSimplyCarouselExample;