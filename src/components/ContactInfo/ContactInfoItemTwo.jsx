import PropTypes from 'prop-types';
import React from 'react';
import ReactVivus from 'react-vivus';

import { useTranslation } from 'react-i18next'
const ContactInfoItemTwo = ({ data, classOption }) => {
    const { t } = useTranslation()
    return (
        <div className={`contact-info ${classOption}`} >
            <div className="icon">
                <ReactVivus
                    id={`contactsvg-${data.id}`}
                    option={{
                        file: data.icon,
                        animTimingFunction: 'EASE',
                            type: 'oneByOne',
                            delay: 80
                    }}
                />
            </div>
            {(() => {
                                                    if (data.id=="1") {
                                                    return (
                                                        <div className="info">
                                                        <h4 className="title">{t('contactsectioncall')}</h4>
                                                        <span className="info-text" dangerouslySetInnerHTML={{__html: data.info}} />
                                                    </div>
                                                    )
                                                    }  
                                                    else {
                                                    return (
                                                        <div className="info">
                                                        <h4 className="title">{t('contactsectionemail')}</h4>
                                                        <span className="info-text" dangerouslySetInnerHTML={{__html: data.info}} />
                                                    </div>
                                                    )
                                                    }
                                                })()}
    
        </div>
    )
}

ContactInfoItemTwo.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

ContactInfoItemTwo.defaultProps = {
    classOption: "contact-info ct-info-two"
};

export default ContactInfoItemTwo;
