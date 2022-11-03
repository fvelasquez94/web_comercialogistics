import React, {Fragment} from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next'
import emailjs from 'emailjs-com';
const ProjectForm = () => {
    const { t } = useTranslation()
    const { register, errors } = useForm({
        mode: "onBlur"
    });
  
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_cn5mtk9', 'template_wunizha', e.target, 'user_4dM4z33kE4xbfbOAnHUdl')
          .then((result) => {
              console.log(result.text);
              alert("Your message was successfully sent!")
              window.location.reload(false); 
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <Fragment>
        <form onSubmit={sendEmail}>
            <div className="row mb-n4">
                <div className="col-md-12 col-12 mb-4">
                    <input type="text" placeholder={t('contactformsectionname')} name="from_name" ref={register({ required: 'Required' })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="col-md-12 col-12 mb-4">
                    <input type="email" placeholder={t('contactformsectionemail')} name="from_email" ref={register({
						required: 'Required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "Invalid"
						}
					})} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                
                <div className="col-12 mb-6">
                    <textarea name="message" placeholder={t('contactformsectionmesage')} ref={register({ required: 'Required' })}></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div className="col-12 text-center mb-4">
                    <button className="btn btn-primary btn-hover-secondary">{t('contactformsectionbutton')}</button>
                </div>
            </div>
        </form>
        <p className="form-messege"></p>
        </Fragment>
    )
}

export default ProjectForm;
