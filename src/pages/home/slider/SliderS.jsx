import './Slider.scss'
import React from 'react'
import Slider from "react-slick";
import goalList from "../../../assets/scripts/goalList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderS = ({ lang, setModal }) => {


    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: CustomDot,
        autoplay: true,
        autoplaySpeed: 2000
    }


    return (
        <div className='slider'>
            <div className="container">
                <div className="slider__inner">
                    <Slider {...settings}>
                        {
                            goalList?.[lang]?.slice(0, 6)?.map((i, index) => (
                                <div className='item' key={index}>
                                    <h4 className="item__title">{ i.title }</h4>
                                    {
                                        lang === 'uz' ?
                                            <React.Fragment>
                                                <p className="item__desc">Garovsiz, kafillarsiz, faqat sugʼurta asosida</p>
                                                <div className='chars row'>
                                                    <div className='div'>
                                                        <span className='chars__txt'>Taklif</span>
                                                        <span className='chars__title'>0% (foizsiz)</span>
                                                    </div>
                                                    <div className='div'>
                                                        <span className='chars__txt'>Pul</span>
                                                        <span className='chars__title'>1 milliard so'mgacha</span>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                            :
                                            <React.Fragment>
                                                <p className="item__desc">Без залога, без поручителей, только страховка</p>
                                                <div className='chars row'>
                                                    <div className='div'>
                                                        <span className='chars__txt'>Предложение</span>
                                                        <span className='chars__title'>0% (беспроцентная)</span>
                                                    </div>
                                                    <div className='div'>
                                                        <span className='chars__txt'>Деньги</span>
                                                        <span className='chars__title'>до 1 млрд. сумов</span>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                    }
                                    <button className='item__btn global-btn' onClick={() => setModal(true)}>Ariza yuborish</button>
                                    <img className='item__img' src={i.img2} alt="img"/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SliderS

// Custom function to render dots
const CustomDot = (index, onClick, currentSlide) => {
    return (
        <div
            className={`custom-dot`}
            onClick={() => onClick()}
        >
        </div>
    )
}
