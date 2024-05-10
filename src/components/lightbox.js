import {
    Gallery,
    LightBox,
    Thumbnail,
    type Slide,
  } from '@olivare/react-photo-gallery'
  
  const MyComponent = () => {
    return (
      <Gallery slides={slides}>
        {slides.map(slide => (
          <Thumbnail key={slide.src} slide={slide} aspectRatioMultiplier={200} />
        ))}
        <LightBox />
      </Gallery>
    )
  }
  
  let slides : Slide [] = [
    {
      src: 'https://farm1.staticflickr.com/5756/22780612953_55b06ca4d5_k.jpg',
      size: '2048x1365',
      // msrc is a lower resolution version of src
      msrc: 'https://farm1.staticflickr.com/5756/22780612953_78da6eb9ec_n.jpg',
      title: 'Streamers',
    },
    {
      src: 'https://farm1.staticflickr.com/709/22780611703_17ac7e37c0_k.jpg',
      size: '2048x1216',
      msrc: 'https://farm1.staticflickr.com/709/22780611703_cac1dee1f2_n.jpg',
      title: 'Blue Dock',
    },
    {
      src: 'https://farm1.staticflickr.com/5629/23407658115_cfa1899b10_k.jpg',
      size: '2048x879',
      msrc: 'https://farm1.staticflickr.com/5629/23407658115_851dece750_n.jpg',
      title: 'Christmas Light',
    },
  ]