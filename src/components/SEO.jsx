import PropTypes from "prop-types";
import React from 'react';
import {Helmet} from "react-helmet";

const SEO = ({title}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="A professionally managed distribution company" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


            <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js';);
              fbq('init', '784472172252670');
              fbq('track', 'PageView');
`,
            }}
          />

<noscript
            dangerouslySetInnerHTML={{
              __html: `
              <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=784472172252670&ev=PageView&noscript=1";
              />
`,
            }}
          />

<script
            dangerouslySetInnerHTML={{
              __html: `(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");

              vgo('setAccount', '799582951');
          
              vgo('setTrackByDefault', true);
          
           
          
              vgo('process');`,
            }}
          />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9WJ79TP1KB"></script>


<script
            dangerouslySetInnerHTML={{
              __html: `  window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-9WJ79TP1KB');`,
            }}
          />
        </Helmet>
    )
}

SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;
