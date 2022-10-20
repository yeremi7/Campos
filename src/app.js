import React from 'react';
import { Route, Switch} from "react-router-dom";
import { Inicio } from "./componentes/inicio";
import { Menu } from "./componentes/menu";
import { Contact } from "./componentes/contact";
import { BookTable } from "./componentes/bookTable";
import { Error404 } from "./componentes/error404";
import { LinksBotones } from "./elementos/linksBotones";


const App = () => {
    return ( 
        <>
            <LinksBotones />

            <Switch>
                <Route exact path="/"                component={Inicio} />
                <Route exact path="/menu"            component={Menu} />
                <Route exact path="/contact"         component={Contact} />
                <Route exact path="/book-table"      component={BookTable} />
                <Route component={Error404} />
            </Switch>  
        </>    
    );
};

export  {App};
