import './Header.scss'
import React from 'react'
import {Link} from "react-router-dom"
import NavBar from "./NavBar"

const Header = ({ lang, setLang }) => {


    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner row no-wrap between align-center">
                    <Link className='header__logo' to='/'>
                        <i className="fa-solid fa-handshake icon"/>
                    </Link>
                    <NavBar lang={lang} />
                    <div className='header__wrapper row no-wrap between align-center g1'>
                        <Link className='sign-up global-btn' to='/sign-up'>Регистрация</Link>
                        <div className="langs">
                            <div className='langs__active'>
                                {(
                                    lang === 'uz' ?
                                        <button className='btn' onClick={() => setLang('uz')}>uz</button>
                                        :
                                        <button className='btn' onClick={() => setLang('ru')}>ru</button>
                                )}
                            </div>
                            <div className='langs__other'>
                                {(
                                    lang !== 'uz' ?
                                        <button className='btn' onClick={() => setLang('uz')}>uz</button>
                                        :
                                        <button className='btn' onClick={() => setLang('ru')}>ru</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
