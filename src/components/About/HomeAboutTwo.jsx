//import {useState} from "react";
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
//import Tilt from 'react-parallax-tilt';
//import Parallax from 'parallax-js';
//import CountUp from 'react-countup';
//import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from 'react-i18next'
const HomeAboutTwo = () => {
    //const [didViewCountUp, setDidViewCountUp] = useState(false);
    const { t } = useTranslation()
    // const onVisibilityChange = isVisible => {
    //     if (isVisible) {
    //     setDidViewCountUp(true);
    //     }
    // };
    //const [scale] = useState(1.04);

    return (
        <div className="section section-padding-top">
            <div className="container">

                <div className="row">

                    <div className="col-xl-5 col-lg-5 col-12" >
                        <div className="about-content-area ">
                            <SectionTitleTwo 
                              title={t('worksectiontitle')}
                              subTitle={t('worksectionsubtitle')}
                            />

                            <div className="row mb-n6">
                                <div className="col-md-7 col-sm-6 col-12 mb-6">
                                    <div className="about-funfact">
                                        <div className="number">
                                      
                                         <img className="image"  src={process.env.PUBLIC_URL + "/images/limena/behaviorscl.png"} style={{width:80}} alt="Behaviors" />
                                        </div>
                                        <h6 className="text">{t('behaviorstitle')}</h6>
                                        <p className="text-dark">{t('behaviors1')}</p>
                                        <p className="text-dark">{t('behaviors2')}</p>
                                        <p className="text-dark">{t('behaviors3')}</p>
                                        <p className="text-dark">{t('behaviors4')}</p>
                                        <p className="text-dark">{t('behaviors5')}</p>
                                                                           </div>
                                </div>
                                <div className="col-md-5 col-sm-6 col-12 mb-6">
                                    <div className="about-funfact">
                                        <div className="number">
                                        <img className="image"  src={process.env.PUBLIC_URL + "/images/limena/valuescl.png"} style={{width:80}} alt="Values" />

                                        </div>
                                        <h6 className="text">{t('valuestitle')}</h6>
                                        <p className="text-dark">{t('values1')}</p>
                                        <p className="text-dark">{t('values2')}</p>
                                        <p className="text-dark">{t('values3')}</p>
                                        <p className="text-dark">{t('values4')}</p>
                                        <p className="text-dark">{t('values5')}</p>
                                        <p className="text-dark">{t('values6')}</p>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-7 col-lg-7 col-12">
                        <div className="about-image-area about-shape-animation right-0 mr-0">
                        <div id="iframeHeightDiv" align="center">

<iframe id="inlineframe" title="Career Site" src="https://ethnixgroup.hrmdirect.com/employment/job-openings.php?search=true&amp;dept=-1&amp;city=-1&amp;state=-1" name="HRM Direct Career Site iFrame" sandbox="allow-top-navigation allow-scripts allow-forms allow-popups allow-same-origin">&nbsp;

</iframe>

</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeAboutTwo;
