import React from 'react';
import {useEffect} from "react";
import contactDataTwo from '../../data/contactInfo/contactInfoTwo.json';
import ContactInfoItem from '../../components/ContactInfo/ContactInfoItemTwo.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import ProjectForm from '../../components/ProjectForm/ProjectForm';

import { useTranslation } from 'react-i18next'
const ContactInformationTwo = () => {


    const { t } = useTranslation()
    useEffect(() => {
 
        
     

    }, [])
    return (
        <div id="contactus" className="section section-padding contact-section">

            <div className="container">
                <div className="row row-cols-lg-2 row-cols-1 align-items-center">
                    <div className="col" data-aos="fade-up">
                        <div className="contact-Information mr-xl-7">
                            <SectionTitleTwo 
                                subTitle={t('contactsectiontitle')}
                                title={t('contactsectionsubtitle')}
                            />
       <div className="footer-social-inline">
                                    <a href="https://www.linkedin.com/company/comercialogistics" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                    <a href="https://www.facebook.com/ComerciaLogistics/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                                    <a href="https://www.instagram.com/comercialogistics/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            {contactDataTwo && contactDataTwo.map((single, key) => {
                                return(
                                    <React.Fragment key={key}>
                                        <ContactInfoItem classOption="ct-info-two" data={single} key={key} />
                                    </React.Fragment>
                                ); 
                            })}
                        </div>
                    </div>
                    <div className="col mt-lg-0 mt-md-10 mt-8" data-aos="fade-up">
                        <div className="contact-form-area box-shadow">
                            <SectionTitle
                                titleOption="section-title text-center mb-7"
                                headingOption="title fz-28"
                                title={t('contactformsectiontitle')}
                                subTitle={t('contactformsectionsubtitle')}
                            />

                            <ProjectForm />

            
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape shape-1 scene">
                <span data-depth="1">
                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/newsletter-shape.png"} alt="" />
                </span>
            </div>

        </div>
    )
}

export default ContactInformationTwo
