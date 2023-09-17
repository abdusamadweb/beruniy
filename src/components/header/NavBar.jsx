import React from 'react'
import navList from "../../assets/scripts/nav";
import {NavLink} from "react-router-dom";

const NavBar = ({ lang }) => {

    return (
        <nav className='nav'>
            <ul className='nav__list row no-wrap between align-center'>
                {
                    navList?.[lang]?.map((i, index) => (
                        <li className='item' key={index}>
                            <NavLink className='item__link' to={i.link}>
                                { i.title }
                                {
                                    i.list &&
                                    <i className="fa-solid fa-chevron-down icon"/>
                                }
                            </NavLink>
                            {(
                                i.list &&
                                <ul className='sub-menu row flex-column'>
                                    {
                                        i.list.map(item => (
                                            <li className='itemm' key={item.title}>
                                                <NavLink
                                                    className='itemm__link'
                                                    to={item.link}
                                                >
                                                    { item.title }
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            )}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavBar
