import React,{ useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactFlagsSelect from 'react-flags-select';

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [selected, setSelected] = useState(localStorage. getItem("defaultlangflag") || 'US');
  



 const onSelectFlag = (countryCode) => {
   
     setSelected(countryCode);
    if(countryCode=="US"){
      i18n.changeLanguage("en");
      // setter
      localStorage.setItem('defaultlang', "en");
      //solo aplica para US
      localStorage.setItem('defaultlangflag', "US");
  
  }else{
    i18n.changeLanguage(countryCode);
    localStorage.setItem('defaultlang', "es");

     localStorage.setItem('defaultlangflag', countryCode);
  }

     
 }

  return (
  
      <ReactFlagsSelect


      countries={["US", "ES"]}
      customLabels={{"US": " ","ES": " "}}
      placeholder="" 
        selected={selected}
        onSelect={code => onSelectFlag(code)}
       
      />
   
  )
}

export default LanguageSelector