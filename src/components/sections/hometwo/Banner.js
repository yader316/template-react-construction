import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import dbData from '../../data/db';


const imgUrl = require.context('../../../assets/img', true);


const bannerslide = [
    {
        img: `${imgUrl('./photos/photo.jpg')}`,
        title: `${dbData.dbFrases[0].frase}`,
        text: `${dbData.dbValues[0].description}`,
        btntext: 'Free Estimate',
        btntext1: 'Our Services'
    },
    {
        img: `${imgUrl('./photos/photo-1.jpg')}`,
        title: `${dbData.dbFrases[1].frase}`,
        text: `${dbData.dbValues[0].description}`,
        btntext: 'Free Estimate',
        btntext1: 'Our Services'
    },
    {
        img: `${imgUrl('./photos/photo-3.jpg')}`,
        title: `${dbData.dbFrases[3].frase}`,
        text: `${dbData.dbValues[0].description}`,
        btntext: 'Free Estimate',
        btntext1: 'Our Services'
    },
]

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <button className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-long-arrow-right" /></button>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <button className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-long-arrow-left" /></button>
    )
}
function Banner(props) {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        arrows: true,
        fade: false,
        dots: false,
        swipe: true,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }],
    }

    return (
        <section className="banner-section banner-section-two">
            <Slider className="banner-slider" id="bannerSlider" {...settings}>
                {bannerslide.map((item, i) => (
                    <div key={i}>
                        <div className="single-banner" style={{ backgroundImage: "url(" + item.img + ")" }}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="banner-content text-center">
                                            <h1 data-animation="fadeInDown" data-delay="0.8s">{item.title}</h1>
                                            <p data-animation="fadeInUp" data-delay="1s">{item.text} </p>
                                            <ul className="btn-wrap">
                                                <li data-animation="fadeInLeft" data-delay="1.2s">
                                                    <Link to="/contact" className="main-btn main-btn-4">{item.btntext}</Link>
                                                </li>
                                                <li data-animation="fadeInRight" data-delay="1.4s">
                                                    <Link to="/services" className="main-btn main-btn-2">{item.btntext1}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Banner;