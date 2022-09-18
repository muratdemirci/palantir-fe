import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {

    return (
        <div>
            <Carousel width={804} autoPlay showArrows={true} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true}
                className="absolute right-0 mr-5">
                <div>
                    <img src={require('../images/tweet1.jpeg')} className='h-72 object-scale-down rounded-lg' alt='..' />
                </div>
                <div>
                    <img src={require('../images/tweet6.webp')}
                        className='h-72 object-scale-down rounded-lg' alt='..' />
                </div>
                <div>
                    <img src={require('../images/tweet2.png')}
                        className='h-72 object-scale-down rounded-lgr' alt='..' />
                </div>
                
                <div>
                    <img src={require('../images/tweet5.png')}
                        className='h-72 object-scale-down rounded-lg' alt='..' />
                </div>
                <div>
                    <img src={require('../images/tweet3.jpeg')}
                        className='h-72 object-scale-down rounded-lg' alt='..' />
                </div>
                <div>
                    <img src={require('../images/tweet4.png')}
                        className='h-72 object-scale-down rounded-lg' alt='..' />
                </div>
            </Carousel>
        </div>


    )
}

export default Slider