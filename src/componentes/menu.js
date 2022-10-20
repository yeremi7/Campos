import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import img_principal from "../assets/img/imagen-principal-menu.png";
import { FooterCampos } from "../elementos/footer";

const Menu = () => {
    return ( 
        <>
            <Helmet>
                <title>Menu</title>
            </Helmet>

            <section className="menu" >

                {/* Parte 1 */}
                <div className="container_imagen_de_fondo_menu" style={{backgroundImage: `url(${img_principal})`}} >
                    <div className="contenido_title_it_is_menu">
                        <p>IT'S MENU</p>
                    </div>
                </div>

                {/* Parte 2 */}
                <div className="container_de_todos_los_productos">

                    {/* SNACKS */}
                    <div className="container_snacks">
                        <p className="title_snacks" >SNACKS</p>

                        <div className="producto_bagels">
                            <p className="bagels" >BAGELS</p>
                            <p className="precio_bagels" >1.00$</p>
                            <p className="definicion_bagels" >Choose from a selection of fillings, from cream cheese to smoked salmon</p>
                        </div>
                        <div className="producto_banana_bread">
                            <p className="banana_bread" >BANANA BREAD</p>
                            <p className="precio_banana_bread" >8.00$</p>
                            <p className="definicion_banana_bread" >An all-time favorite for both kids and grown-ups, now available in regular and sharing sizes</p>
                        </div>
                        <div className="producto_bread_rolls">
                            <p className="bread_rolls" >BREAD ROLLS</p>
                            <p className="precio_bread_rolls" >2.00$</p>
                            <p className="definicion_bread_rolls" >Our handmade bread rolls come in all shapes and sizes</p>
                        </div>
                        <div className="producto_5seeds_bread">
                            <p className="seeds_bread" >5 SEEDS BREAD</p>
                            <p className="precio_5seeds_bread" >8.00$</p>
                            <p className="definicion_5seeds_bread" >Our nutritious 5 seed bread goes through a 12-hour cold raise and is baked in our stone ovens</p>
                        </div>
                        <div className="producto_french_bread">
                            <p className="french_bread" >FRENCH BREAD</p>
                            <p className="precio_french_bread" >4.00$</p>
                            <p className="definicion_french_bread" >Feeling indulgent? Our rich French toast is perfect for special occasions</p>
                        </div>
                        <div className="producto_organic_toast">
                            <p className="organic_toast" >ORGANIC TOAST</p>
                            <p className="precio_organic_toast" >3.00$</p>
                            <p className="definicion_organic_toast" >Healthy and delicious, our organic toast is served with locally sourced butter and condiments</p>
                        </div>
                    </div>

                    {/* MEALS */}
                    <div className="container_meals">
                        <p className="title_meals" >MEALS</p>

                        <div className="producto_eggsand_toast">
                            <p className="eggsand_toast" >EGGSAND TOAST</p>
                            <p className="precio_eggsand_toast" >4.00$</p>
                            <p className="definicion_eggsand_toast" >Toasted bread of your choice, served with fried, boiled or poached eggs</p>
                        </div>
                        <div className="producto_bread_basket">
                            <p className="bread_basket" >BREAD BASKET</p>
                            <p className="precio_bread_basket" >10.00$</p>
                            <p className="definicion_bread_basket" >A selection of our freshly baked bread, served with cold cuts and continental cheeses</p>
                        </div>
                        <div className="producto_eggsand_bacon">
                            <p className="eggsand_bacon" >EGGSAND BACON</p>
                            <p className="precio_eggsand_bacon" >6.00$</p>
                            <p className="definicion_eggsand_bacon" >Toasted bread with eggs and a generous serving of locally sourced back bacon</p>
                        </div>
                        <div className="producto_brunch_for_two">
                            <p className="brunch_for_two" >BRUNCH FOR TWO</p>
                            <p className="precio_brunch_for_two" >14.00$</p>
                            <p className="definicion_brunch_for_two" >A loaf of our sourdough bread, served with eggs, bacon and locally sourced sausages, with a side salad</p>
                        </div>
                        <div className="producto_avocado_toast">
                            <p className="avocado_toast" >AVOCADO TOAST</p>
                            <p className="precio_avocado_toast" >6.00$</p>
                            <p className="definicion_avocado_toast" >Toasted 5 seed bread with avocado and a drizzle of extra virgin olive oil</p>
                        </div>
                        <div className="producto_celebration_brunch">
                            <p className="celebration_brunch" >CELEBRATION BRUNCH</p>
                            <p className="precio_celebration_brunch" >20.00$</p>
                            <p className="definicion_celebration_brunch" >For up to 3 people, our celebration brunch includes the breadbasket of choice, eggs, bacon, and sausages, as well as a glass of sparkling wine</p>
                        </div>
                    </div>

                </div>

                {/* Parte 4 */}
                <div className="container_aside_book_table">
                    <h1>BOOK A TABLE</h1>
                    <p>Accepting a reservations any time</p>
                    <Link to="/book-table" ><button>Book a table</button></Link>
                </div>

                <FooterCampos />
            </section>
        </>
     );
}
 
export {Menu};