import {useEffect, useRef} from "react";
import SectionTitle from '../../components/SectionTitles/SectionTitle';

import Parallax from 'parallax-js';
import {Link} from "react-router-dom";

const Newsletter = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-bg-image section-padding-t110-b120 newsletter-section overlay-two" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/limena/jobland.jpg)`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="newsletter-content">
                            <SectionTitle
                                titleOption="color-light text-center"
                                title="Work with us"
                                subTitle="We are looking for people to join our team, and be part of a growing logistics company in the USA southeast area. We are Comercia Logistics!"
                            />
                                  <div className="col-12 text-center mb-4">
                                                        <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-primary btn-hover-secondary">Apply Today</Link>
                        </div>    </div>
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
