import React from "react";
import { useTranslation } from 'react-i18next'



const HomeSkillWithVideo = () => {
    const { t } = useTranslation()
    return (
        <div className="video-section section section-padding" >


            <div className="container">

                <div className="row align-items-center">

                    <div className="col-xl-4 col-lg-4 col-12" data-aos="fade-up">
                        <div className="skill-with-video-content">
                            <div className="section-title-two mb-8">
                            <img className="image photomap" width="50" src={process.env.PUBLIC_URL + "/images/limena/gpspin.png"} alt="gps pin"  />
                                <span className="sub-title">{t('coveragesectiontitle')}</span>
                                <h3 className="title">{t('coveragesectionsubtitle')}</h3>
                            </div>

                            <ul className="agency-list">
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">INDIANA</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">KENTUCKY</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">MISSOURI</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">OHIO</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">TENNESSEE</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">ALABAMA
</div>
                                </li>                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">MISSISSIPPI
</div>
                                </li>
    
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-8 col-12">
                        <div className="video-popup-area">
                            <div className="skill-video">
                                <img className="image"  src={process.env.PUBLIC_URL + "/images/limena/mapacorrecto.png"} alt="mapa" />

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}



export default HomeSkillWithVideo;
