import './Partners.scss'
import React from 'react'
import partnersList from '../../../assets/scripts/partnersList'

const Partners = ({ lang }) => {
    return (
        <div className='partners'>
            <div className="container">
                <h4 className="partners__title">Условия сотрудничества</h4>
                <ul className='partners__list'>
                    {
                        partnersList?.[lang]?.map(i => (
                            <li className='item' key={i.id}>
                                <div className="row between align-center mb1">
                                    <i className="fa-solid fa-square-check icon"/>
                                    <span className='item__num'>{ i.id }</span>
                                </div>
                                <p className='item__desc'>{ i.title }</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Partners
