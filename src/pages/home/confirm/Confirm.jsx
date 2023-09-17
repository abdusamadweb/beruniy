import './Confirm.scss'
import React from 'react'
import confirmList from "../../../assets/scripts/confirmList";

const Confirm = ({ lang }) => {
    return (
        <div className='confirm'>
            <div className="container">
                <h4 className="confirm__title">Подтверждение сотрудничества даже в сложных ситуациях</h4>
                <ul className="confirm__list">
                    {
                        confirmList?.[lang]?.map((i, index) => (
                            <li
                                className='item'
                                style={{backgroundImage: `url(${i.img})`}}
                                key={index}
                            >
                                <div className='item__icons'>
                                    <i className={i.icon}/>
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

export default Confirm
