import PropTypes from "prop-types";
import React from 'react';


const SectionTitleTwo = ({subTitle , title, classOption}) => {
    return (
        <div className={`section-title-two ${classOption}`} data-aos="fade-up">
                        <h1 className="" dangerouslySetInnerHTML={{__html: title}} />

            <span className="text-dark">{subTitle}</span>
        </div>
    )
}

SectionTitleTwo.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    classOption: PropTypes.string
};
SectionTitleTwo.defaultProps = {
    classOption: "section-title-two"
};

export default SectionTitleTwo;
