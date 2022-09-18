import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {

    return (
        <div>
            <Carousel width={804} autoPlay showArrows={true} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true}
                className="absolute right-0 mr-5">
                <div>
                    <img src="https://wallpaperaccess.com/full/8296001.jpg" className='h-72 object-cover rounded-lg' alt='..' />
                </div>
                <div>
                    <img src="https://902558.smushcdn.com/2161880/wp-content/uploads/2022/04/1661-scaled-e1649434277532-1140x570.jpg?lossy=1&strip=1&webp=1"
                        className='h-72 object-cove rounded-lgr' alt='..' />
                </div>
                <div>
                    <img src="https://c4.wallpaperflare.com/wallpaper/905/666/494/background-render-fon-bitcoin-bitcoin-hd-wallpaper-preview.jpg"
                        className='h-72 object-cover rounded-lg' alt='..' />
                </div>
            </Carousel>
        </div>


    )
}

export default Slider