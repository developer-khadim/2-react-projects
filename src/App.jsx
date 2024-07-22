import React from 'react'
import ImgSlider from './Projects/ImgSlider'
import QrCode from './Projects/QrCode'

const App = () => {
  return (
    <div>
      
      {/* Images Slider */}
      {/* <ImgSlider url={'https://picsum.photos/v2/list'} limit={'8'} /> */}

      {/* QR Code Generotor */}
      <QrCode/>
    </div>
  )
}

export default App