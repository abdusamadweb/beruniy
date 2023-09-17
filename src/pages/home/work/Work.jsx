import './Work.scss'
import React from 'react'
import workList from "../../../assets/scripts/workList";

const Work = ({ lang }) => {
    return (
        <div className='work'>
            <div className="container">
                <h4 className="work__title">Kак мы работаем</h4>
                <ul className='work__list'>
                    {
                        workList?.[lang]?.map((i, index) => (
                            <li className='item pb2' key={index}>
                                <img className='item__img' src={i.img} alt="img"/>
                                <div className='px1'>
                                    <h5 className="item__title">{ i.title }</h5>
                                    <p className="item__desc">{ i.desc }</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Work
