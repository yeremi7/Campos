import React, {useEffect} from 'react';

const Alerta = ({estadoAlerta, changeEstadoAlerta}) => {

    useEffect(() => {
        let tiempo;

        if (estadoAlerta === true) {
            tiempo = setTimeout(() => {
               changeEstadoAlerta(false) 
            }, 3000);
        };

        return(() => clearTimeout(tiempo));

    },[estadoAlerta, changeEstadoAlerta]);

    return ( 
        <>
            {estadoAlerta && 
                <div className="contenidoAlerta">
                    <p>Envio correcto</p>
                </div>
            }
        </>
     );
};
 
export {Alerta};