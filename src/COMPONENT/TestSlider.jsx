
import React from "react"
import Slider from "react-slick"


const  TestSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

      return(
        <Slider {...settings}>
        <div>
          <h3 className="h3_slider-1"><img className="teslaCars" src="/img/tesla-cars.jpeg" alt="tesla" /></h3>
        </div>
        <div>
          <h3 className="h3_slider"><img className="teslaCars" src="/img/tesla-cars-2.jpeg" alt="tesla" /></h3>
        </div>
        <div>
          <h3 className="h3_slider"><img className="teslaCars" src="/img/tesla-model-3.jpeg" alt="tesla" /></h3>
        </div>
        <div>
          <h3 className="h3_slider"><img className="teslaCars" src="/img/tesla-500.jpg" alt="tesla" /></h3>
        </div>
        <div>
          <h3 className="h3_slider"><img className="teslaCars" src="/img/tesla-600.jpg" alt="tesla" /></h3>
        </div>
        <div>
          <h3 className="h3_slider"><img className="teslaCars" src="/img/tesla-cars-6.jpeg" alt="tesla" /></h3>
        </div>
      </Slider>
      )
}

export default TestSlider
