import React, {useRef, useState} from 'react';
import { Helmet } from "react-helmet";
import { FooterCampos } from "../elementos/footer";
import { Alerta } from "../elementos/alerta";

const BookTable = () => {

    const [name, changeName]         = useState('');
    const [lastName, changeLastName] = useState('');
    const [email, changeEmail]       = useState('');
    const [message, changeMessage]   = useState('');
    const [estadoAlerta, changeEstadoAlerta]   = useState(false);

    const inputName     = useRef();
    const inputLastName = useRef();
    const inputEmail    = useRef();
    const inputMessage  = useRef();

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            changeName(e.target.value)
        }
        if(e.target.name === 'lastName'){
            changeLastName(e.target.value)
        }
        if(e.target.name === 'email'){
            changeEmail(e.target.value)
        }
        if(e.target.name === 'message'){
            changeMessage(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

        if (!expresionRegular.test(email)) inputEmail.current.style.outline = '1px solid #F44336';
        if (name === '')      inputName.current.style.outline = '1px solid #F44336';
        if (lastName === '')  inputLastName.current.style.outline = '1px solid #F44336';
        if (email === '')     inputEmail.current.style.outline = '1px solid #F44336';
        if (message === '')   inputMessage.current.style.outline = '1px solid #F44336';

        if (expresionRegular.test(email) && name.length>0 && lastName.length>0 && email.length>0 && message.length>0 ) {

            inputName.current.style.outline = 'none';
            inputLastName.current.style.outline = 'none';
            inputEmail.current.style.outline = 'none';
            inputMessage.current.style.outline = 'none';

            let tiempo = setTimeout(() => {
                changeName('');
                changeLastName('');
                changeEmail('');
                changeMessage('');
            }, 2000);

            changeEstadoAlerta(true);

            return(() => clearTimeout(tiempo));
        };
    };


    return (
        <> 
            <Helmet>
                <title>Book a table</title>
            </Helmet>

            <section className="book_a_table" id="book-table" >
                
                {/* Parte 1 */}
                <div className="container_book_a_table">
                    <div className="contenido_titulo_principal">
                        <h1>BOOK A TABLE </h1>
                        <p>Whatever the accasion, we're certain that you can make it special at CAMPOS.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="form_book_a_table">
                        <div className="input_name" >
                            <p>Name*</p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={name}
                                onChange={handleChange}
                                ref={inputName}
                            />
                        </div>

                        <div className="input_last_name" >
                            <p>Last name*</p>
                            <input 
                                type="text"
                                name="lastName"
                                placeholder="Your last name"
                                value={lastName}
                                onChange={handleChange}
                                ref={inputLastName}
                            />
                        </div>

                        <div className="input_email" >
                            <p>Your email*</p>
                            <input 
                                type="name"
                                name="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={handleChange}
                                ref={inputEmail}
                            />
                        </div>

                        <div className="input_message" >
                            <p>Message*</p>
                            <textarea 
                                type="textarea"
                                name="message"
                                placeholder="message"
                                value={message}
                                onChange={handleChange}
                                ref={inputMessage}
                            />
                        </div>

                        <button type="submit" className="btn-submit" >Submit</button>
                    </form>
                </div>

                {/* Parte 2 */}
                <div className="mensaje_adicional">
                    <p>BE PART OF THE CHEWS FAMILY: WE'VE CELEBRATED OUR CUSTOMERS' BIRTHDAYS, ENGAGEMENT PARTIES AND HEN DOS AT HERE CAMPOS</p>
                </div>

                <FooterCampos/>

                <Alerta 
                    estadoAlerta = {estadoAlerta}
                    changeEstadoAlerta = {changeEstadoAlerta}
                />
            </section>
        </>
     );
}
 
export {BookTable};