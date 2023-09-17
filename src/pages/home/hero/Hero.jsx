import './Hero.scss'
import React from 'react'
import beruniy from "../../../assets/images/hero-img.png";

const Hero = ({ lang, setModal }) => {


    return (
        <div className='home pt1'>
            <marquee
                style={{color: 'red'}}
                behavior="scroll"
                direction="left"
                scrollamount="10"
            >
                Уважаемый пользователь, если вы хотите подать заявку на то, чтобы стать членом нашего фонда и использовать средства фонда, сначала зарегистрируйтесь на нашем сайте, после этого вам будет выдан ключ, и через этот ключ вы сможете подать приложение!
            </marquee>
            <div className="container">
                <div className="home__inner grid-center align-center py2">
                    <div className='home__titles'>
                        <p className='desc'>
                            USHBU LOYIHA ABU RAYXON BERUNIYNING 1050 YILLIGIGA BAG'ISHLANADI.
                        </p>
                        <h1 className="title">
                            BERUNIY-AVLODLARI JAMOAT FONDI HAMKORLIKNI KENGAYTIRISH MAQSADIDA OʻZBEKISTON RESPUBLIKASI FUQAROSI BO'LGAN O'Z A'ZOLARIGA 3-YILDAN 10-YILGACHA, 10-YILDAN 20-YILGACHA BOʻLGAN MUDDATGA YANGI ISH OʻRINLARINI YARATISH, UY-JOY SHAROITINI YAXSHILASH VA TADBIRKORLIK FAOLIYATINI AMALGA OSHIRISH UCHUN HAMKORLIK QILISHNI TAKLIF QILADI
                        </h1>
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
                        <button className='btn global-btn' onClick={() => setModal(true)}>Ariza yuborish</button>
                    </div>
                    <img className='home__img' src={beruniy} alt="beruniy"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
