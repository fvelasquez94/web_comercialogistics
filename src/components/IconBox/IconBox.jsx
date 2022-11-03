import PropTypes from "prop-types";
import React from 'react';
import ReactVivus from 'react-vivus';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next'
const IconBox = ({ data, classOption }) => {
    const { t } = useTranslation()
    return (
        <div className={`icon-box text-center ${classOption}`}>
            <div className="icon">
                <ReactVivus
                    id={`servicesvg-${data.id}`}
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
                                                        <div className="content">
                                                        <h3 className="title">{t('servicesonetitle')}</h3>
                                                        <div className="desc">
                                                            <p>{t('servicesonesubtitle')}</p>
                                                        </div>
                                                        <Link to={data.link} className="link">{data.pageLink}</Link>
                                                    </div>
                                                    )
                                                    }  else if (data.id=="2") {
                                                        return (
                                                            <div className="content">
                                                            <h3 className="title">{t('servicestwotitle')}</h3>
                                                            <div className="desc">
                                                                <p>{t('servicestwosubtitle')}</p>
                                                            </div>
                                                            <Link to={data.link} className="link">{data.pageLink}</Link>
                                                        </div>
                                                        )
                                                        } 
                                                    else {
                                                    return (
                                                        <div className="content">
                                                        <h3 className="title">{t('servicesthreetitle')}</h3>
                                                        <div className="desc">
                                                            <p>{t('servicesthreesubtitle')}</p>
                                                        </div>
                                                        <Link to={data.link} className="link">{data.pageLink}</Link>
                                                    </div>
                                                    )
                                                    }
                                                })()}
      
        </div>
    )
}

IconBox.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

IconBox.defaultProps = {
    classOption: "icon-box text-center",
};

export default IconBox;
