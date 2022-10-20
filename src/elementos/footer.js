import React from 'react';

const FooterCampos = () => {
    return ( 
        <section className="footer_campos" >
            <h2 className="footer_title_campos" >CAMPOS</h2>

            <div className="container_establecimiento">
                <p>1445 Floral Ave, New York City, Unites States.</p>
            </div>

            <div className="container_dias_apertura">
                <p>MONDAY - FRIDAY</p>
                <p>6:00 AM TO 9:00 PM</p>
            </div>

            <div className="container_dias_extra_apertura">
                <p>SATURDAY - SUNDAY</p>
                <p>10:00 AM TO 8:00 PM</p>
            </div>

            <div className="container_lugar">
                <p>Office: 56C Gimblinton Street, New York City, United States.</p>
            </div>

            <p className="contactanos" >Contact : 4400 - 88 - 823 </p>
        </section>
     );
}
 
export {FooterCampos};