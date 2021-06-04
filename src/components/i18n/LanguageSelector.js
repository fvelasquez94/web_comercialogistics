import React,{ useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactFlagsSelect from 'react-flags-select';

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [selected, setSelected] = useState('US');
  



 const onSelectFlag = (countryCode) => {
   
     setSelected(countryCode);
    if(countryCode=="US"){i18n.changeLanguage("EN")}else{i18n.changeLanguage(countryCode)}

     
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