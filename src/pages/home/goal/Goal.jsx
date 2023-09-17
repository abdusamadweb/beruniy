import './Goal.scss'
import React from 'react'
import goalList from "../../../assets/scripts/goalList";
import {Link} from "react-router-dom";

const Goal = ({ lang }) => {


    return (
        <div className='goal'>
            <div className="container">
                <div className="goal__titles">
                    <h2 className="title">
                        MAQSADLARINGIZNI AMALGA OSHIRISH UCHUN QULAY SHAROITDAN FOYDALANING!
                    </h2>
                    <p className='desc'>
                        Beruniy Avlodlari xalqaro jamoat fondi, 0 % miqdorida O'zbekidton Respublikasi fuqarolariga 3-yildan 10-yilgacha bo'lgan muddatga: Kooperatsiyani rivojlantirish, yangi ish o'rinlarini yaratish, uy-joy sharoitini yaxshilash va tadbirkorlik faoliyatini amalga oshirish maqsadida sug'urtalangan shartlarda 100 million so'mdan 1 milliard so'mgacha bo'lgan miqdordagi pul mablag'laridan kafilsiz va foizsiz foydalanishni va xamkorlik qilishni taklif qiladi
                    </p>
                </div>
                <ul className='goal__list grid'>
                    {
                        goalList?.[lang]?.map((i, index) => (
                            <li className='item' key={index}>
                                <div>
                                    <img className='item__img' src={i.img} alt="img"/>
                                    <div className="wrapper">
                                        <span className='txt'>{ i.type }</span>
                                        <p className='desc'>{ i.title }</p>
                                    </div>
                                </div>
                                <Link className='item__btn  align-center' to=''>
                                    <span className='txt'>{ lang === 'uz' ? "Ko'proq" : 'Больше' }</span>
                                    <i className="fa-solid fa-angles-right icon"/>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Goal
