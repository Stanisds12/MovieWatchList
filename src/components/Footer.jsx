import React, { Fragment } from 'react';


const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className="contactos">
                    <a href={"https://www.facebook.com/stanislau.ebo"} rel="noopener noreferrer" target={"_blank"}><i className="fab fa-facebook-square fa-2x text-primary mr-2"></i></a>
                    <a href={"https://www.linkedin.com/in/stanislau-ebo-da-silva-2b7814176/"} rel="noopener noreferrer" target={"_blank"}><i className="fa fa-linkedin-square fa-2x text-primary mr-2"></i> </a>
                    <a href={"https://github.com/Stanisds12"} rel="noopener noreferrer" target={"_blank"}><i className="fa fa-github fa-2x"></i></a>
                </div>
                
            </footer>
            
        </Fragment>
    );
}

export default Footer;
