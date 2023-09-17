import './Cooperate.scss'
import React from 'react'

const Cooperate = ({ lang, setModal }) => {
    return (
        <div className='cooperate'>
            <div className="container">
                <div className="cooperate__inner">
                    <h3 className='cooperate__title'>
                        Сотрудничайте с Международным общественным фондом «Беруний авлодлари» на самых выгодных условиях
                    </h3>
                    <ol className='cooperate__list row flex-column'>
                        <li className='item'>Избегайте поиска поручителей и залога</li>
                        <li className='item'>Избегайте поиска поручителей и залога</li>
                        <li className='item'>Избегайте поиска поручителей и залога</li>
                    </ol>
                    <p className='cooperate__txt'>Отправьте нам заявку на сотрудничество и членство</p>
                    <button className='cooperate__btn global-btn' onClick={() => setModal(true)}>Подавать заявление</button>
                </div>
            </div>
        </div>
    )
}

export default Cooperate
