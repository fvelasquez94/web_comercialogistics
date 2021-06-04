import React from 'react'
import PropTypes from "prop-types";
//import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Intro =  ({data}) => {
    const { t } = useTranslation()
 

    return (
        
        <div className="intro-section overlay section" style={{backgroundImage: `url(${process.env.PUBLIC_URL + data.backgroundImage})`}}>

            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">

                    <div className="col align-self-center">
                        <div className="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                        {(() => {
                            if (data.id=="1") {
                            return (
                                <div>
                                     <h2 className="title">{t('firstslidertitle')}</h2>
                            <div className="desc">
                                <p>{t('firstslidersubtitle')}</p>
                            </div>
                                </div>
                            )
                            } 
                            else {
                            return (
                                <div>
                                <h2 className="title">{t('secondslidertitle')}</h2>
                       <div className="desc">
                           <p>{t('secondslidersubtitle')}</p>
                       </div>
                           </div>
                            )
                            }
                        })()}
                           
                            {/* <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-primary btn-hover-secondary">Get Started</Link>
                            <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-outline-white btn-hover-primary"> Learn More </Link> */}
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
    )
}

Intro.propTypes = {
    data: PropTypes.object
};
  

export default Intro
