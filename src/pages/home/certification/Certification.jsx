import './Certification.scss'
import React from 'react'
import cert1 from '../../../assets/other/ГУВОХНОМА_ТАЙЁР_ЭЛЕКТРОННҚЙ_ВАРИАНТ.pdf'
import cert2 from '../../../assets/other/СЕРТИФИКАТ_ОРДЕНА.pdf'
import certImg1 from '../../../assets/other/cert1.jpg'
import certImg2 from '../../../assets/other/cert2.jpg'

const Certification = () => {
    return (
        <div className='cert'>
            <div className="container">
                <h3 className="cert__title">Сертификат и свидетельство</h3>
                <div className='cert__wrapper'>
                    <a className='wrapper__link' href={cert1} target='_blank'>
                        <img className='img' src={certImg1} alt="certification"/>
                    </a>
                    <a className='wrapper__link' href={cert2} target='_blank'>
                        <img className='img' src={certImg2} alt="certification"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Certification
