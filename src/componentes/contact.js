import React from 'react';
import { Helmet } from "react-helmet";
import rectangleContact from "../assets/img/Rectangle-contact.png";
import { FooterCampos } from "../elementos/footer";

const Contact = () => {
    return ( 
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <section className="contact_completo" >
                
                {/* Parte 1 */}
                <div className="container_contact_img">
                    
                    <h1 className="title_contactUs" >CONTACT US</h1>

                    <div className="container_informacion_correspondiente">
                        <div className="cafe">
                            <h3>CAFE</h3>
                            <p>4400 - 88- 823</p>
                        </div>
                        <div className="press">
                            <h3>PRESS</h3>
                            <p>press@campos.com</p>
                        </div>
                        <div className="email">
                            <h3>EMAIL</h3>
                            <p>info@campos.com</p>
                        </div>
                        <div className="events">
                            <h3>EVENTS</h3>
                            <p>events@campos.com</p>
                        </div>
                        <div className="bookings">
                            <h3>BOOKINGS</h3>
                            <p>bookings@campos.com</p>
                        </div>
                        <div className="marketing">
                            <h3>MARKETING</h3>
                            <p>partners@campos.com</p>
                        </div>
                    </div>

                    <div className="container_img_contact">
                        <img className="rectangleContact" src={rectangleContact} alt="Error" />
                    </div>
                
                </div>

                <FooterCampos />
            </section>
        </>    
     );
}
 
export {Contact};