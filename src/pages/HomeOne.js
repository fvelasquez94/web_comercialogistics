import React,{ Suspense } from 'react';
import SEO from '../components/SEO';

import Header from "../partials/header/Header";
import IntroSlider from '../container/IntroSlider/IntroSlider';
import HomeAbout from '../components/About/HomeAbout.jsx';
import ServiceIconBox from '../container/service/ServiceIconBox';
import '../i18n'
import HomeSkillWithVideo from '../container/HomeSkillWithVideo/HomeSkillWithVideo';
import Newsletter from '../container/Newsletter/Newsletter';
import ContactInformationTwo from '../container/ContactInformation/ContactInformationTwo';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';



const HomeOne = () => {


    return (
   
        <React.Fragment>  
       
            <SEO title="Comercia Logistics - Distribution Across the Country" />   
             <Suspense fallback={null}>
            <Header />
          
            <IntroSlider />
            <HomeAbout />
            <ServiceIconBox classOption="bg-color-1" />

            <HomeSkillWithVideo />
            <Newsletter />
            <ContactInformationTwo />  
            <Footer /> 
            <ScrollToTop /></Suspense>
        </React.Fragment>
     
    )
}

export default HomeOne;



