import {useEffect, useRef} from "react";
import SectionTitle from '../../components/SectionTitles/SectionTitle';

import Parallax from 'parallax-js';

import { useTranslation } from 'react-i18next'
const Newsletter = () => {
    const sceneEl = useRef(null);
    const { t } = useTranslation()
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div id="workwithus" className="section section-bg-image newsletter-section overlay-two" style={{paddingTop:100, paddingBottom:100,backgroundImage: `url(${process.env.PUBLIC_URL}/images/limena/jobland.jpg)`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="newsletter-content">
                            <SectionTitle
                                titleOption="color-light text-center"
                                title={t('worksectiontitle')}
                                subTitle={t('worksectionsubtitle')}
                            />
                            <div id="iframeHeightDiv" align="center">

<iframe id="inlineframe" title="Career Site" src="https://ethnixgroup.hrmdirect.com/employment/job-openings.php?search=true&amp;dept=-1&amp;city=-1&amp;state=-1" name="HRM Direct Career Site iFrame" sandbox="allow-top-navigation allow-scripts allow-forms allow-popups allow-same-origin">&nbsp;

</iframe>

</div>
                                  {/* <div className="col-12 text-center mb-4">
                                                        <a href="https://apply.comercialogistics.com/" className="btn btn-primary btn-hover-secondary">{t('worksectionbutton')}</a>
                        </div>  */}  </div> 
                    </div>
                </div>
            </div>

            <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/newsletter-shape.png"} alt="" />
                </span>
            </div>
        </div>
    )
}

export default Newsletter
