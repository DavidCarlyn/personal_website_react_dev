import React from 'react';
import './Footer.css';

import LinkedInIcon from '../../resources/images/linkedin_icon.png';
import FacebookIcon from '../../resources/images/facebook_icon.png';

function Footer() {
    return (
        <div className="Footer">
            <a href="https://www.linkedin.com/in/david-carlyn"><img src={LinkedInIcon} /></a>
            <a href="https://www.facebook.com/david.carlyn"><img src={FacebookIcon} /></a>
        </div>
    );
}

export default Footer;
