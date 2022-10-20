import React, {useEffect, useRef, useState} from 'react';
import { NavLink , Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const LinksBotones = () => {
    const [count, setCount] = useState(0)
    const refMenu = useRef();
    const refSombra = useRef();
    
    const desplazar = () => {
        if (count === 0) {
            refMenu.current.className='nav_link desplazar';
            refSombra.current.style.visibility = 'visible';
            setCount(1);
        }else{
            refMenu.current.classList.remove('desplazar');
            refSombra.current.style.visibility = 'hidden';
            setCount(0);
        };
    };
    
    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (e.target.className === 'links_botones' || e.target.className === 'nav_link desplazar' || e.target.className === 'sombra' || e.target.textContent === 'CAMPOS.' ) {
                refMenu.current.classList.remove('desplazar');
                refSombra.current.style.visibility = 'hidden';
                setCount(0);
            }
        })
    })

    return ( 
        <>
            <section className="links_botones" >

                <Link to="/" className="titleLogo" ><h3>CAMPOS.</h3></Link> 

                <nav ref={refMenu} className="nav_link">
                    <NavLink to= "/menu" className="home" onClick={() => desplazar()} >Menu</NavLink>
                    <NavLink to= "/contact" className="contact" onClick={() => desplazar()} >Contact</NavLink>
                    <NavLink to= "/book-table" className="bookTable" onClick={() => desplazar()} >Book A Table</NavLink>
                </nav>            

                <FontAwesomeIcon onClick={() => desplazar()} icon={faBars} className="faBars" />

                <div ref={refSombra} className="sombra"></div>
            </section>
        </>
     );
}
 
export {LinksBotones};