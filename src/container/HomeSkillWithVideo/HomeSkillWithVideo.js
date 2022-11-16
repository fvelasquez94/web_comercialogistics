import React from "react";
import { useTranslation } from 'react-i18next'



const HomeSkillWithVideo = () => {
    const { t } = useTranslation()
    return (
        <div className="video-section section section-padding overlay-two"  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/limena/jobland.jpg)`}}>


            <div className="container">

                <div className="row align-items-center">

                    <div className="col-xl-4 col-lg-4 col-12" data-aos="fade-up">
                        <div className="skill-with-video-content">
                            <div className="section-title-two mb-8">
                            <img className="image photomap" width="50" src={process.env.PUBLIC_URL + "/images/limena/gpspin.png"} alt="gps pin"  />
                                <span className="sub-title text-white">{t('coveragesectiontitle')}</span>
                                <h3 className="title text-white" >{t('coveragesectionsubtitle')}</h3>
                            </div>

                            <ul className="agency-list">
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text text-white">INDIANA</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text text-white">KENTUCKY</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text text-white">MISSOURI</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text text-white">OHIO</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text text-white">TENNESSEE</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text text-white">ALABAMA
</div>
                                </li>                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text text-white">MISSISSIPPI
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
