import React from 'react'
import {NavLink} from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const NavBar = () => {

 const { t } = useTranslation()

    return (
        <nav className="site-main-menu">
            <ul>
                <li>
                {/* <li className="has-children"> */}
                    <NavLink  to={process.env.PUBLIC_URL + "/"}><span className="menu-text">{t('homelabel')}</span></NavLink>
                    {/* <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-one"}><span className="menu-text">Home One</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-two"}><span className="menu-text">Home Two</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-three"}><span className="menu-text">Home Three</span></NavLink></li>
                    </ul> */}
                </li>
  {/*               <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">About Us</span></NavLink>
                </li> */}
                <li>
                    
                    <a href="#services"><span className="menu-text">{t('ourserviceslabel')}</span></a>
                </li>
                <li>
                    <a href="#workwithus"><span className="menu-text">{t('workwithuslabel')}</span></a>
                </li>
                <li>

                    <a href="#contactus"><span className="menu-text">{t('contactuslabel')}</span></a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
