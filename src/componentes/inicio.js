import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import imagenPrincipal from "../assets/img/imagen-principal.png";
import imagenPanes from "../assets/img/imagen-panes.png";
import centroDeReunion from "../assets/img/centro-de-reunion.png";
import figure1 from "../assets/img/figure-1.jpg";
import figure2 from "../assets/img/figure-2.jpg";
import figure3 from "../assets/img/figure-3.jpg";
import figure4 from "../assets/img/figure-4.jpg";
import figure5 from "../assets/img/figure-5.jpg";
import figure6 from "../assets/img/figure-6.jpg";
import { FooterCampos } from "../elementos/footer";
import { SvgFacebook, SvgInstagram , SvgTwitter } from "../elementos/linksSvg";

const Inicio = () => {
    
    return ( 
        <>
            <Helmet>
                <title>Campos</title>
            </Helmet>
            
            <section className="inicio" >
                
                {/* Parte 1 */}
                <div className="container_fondo_de_imagen" style={{backgroundImage: `url(${imagenPrincipal})`}}>
                    <div className="container_titulo_principal">
                        <p className="title_principal" >CAMPOS.</p>
                        <p className="direccion" >1445 Floral Ave. New York City, United States</p>
                        <div className="container_img_links"> 
                            <a href="https://es-la.facebook.com/"  > <SvgFacebook xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="none"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></SvgFacebook> </a> 
                            <a href="https://www.instagram.com/"   > <SvgInstagram xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" preserveAspectRatio="none"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></SvgInstagram> </a> 
                            <a href="https://twitter.com/?lang=es" > <SvgTwitter xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="none"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></SvgTwitter> </a> 
                        </div>
                    </div>
                </div>

                {/* Parte 2 */}
                <div className="container_mensaje_del_servicio">
                    <header className="mensaje_principal" > HOME BAKES MADE WITH LOVE, PASSION, AND METICULOUS ATTENTION TO DETAIL</header>
                </div>

                {/* Parte 3 */}
                <div className="container_de_algunos_productos">

                    <p className="small_bites" >SMALL BITES</p>

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

                    <Link to="/menu" ><button className="btn_menu" >View the menu</button></Link>

                </div>

                {/* Parte 4 */}
                <div className="container_we_care_img">
                    <div className="container_figure_panes">
                        <img className="figure_panes" src={imagenPanes} alt="img"/>
                    </div>

                    <div className="container_nos_importa">
                        <h1 className="title_we_care" > WE CARE </h1>
                        <p className="texto_1" >Our philosophy is to be part of the neighborhood and give back to our community.</p>
                        <p className="texto_2" >We publish monthly sourdough recipe boocklets both online and in-store, organize workshops and evening courses, and even rent out our shop for local artists and musicians.</p>
                    </div>
                </div>

                {/* Parte 5 */}
                <div className="informacion_adicional_del_restaurant">
                    <div className="container_recipes">
                        <h1>Recipes</h1>
                        <p>Sourdough can be intimidating for a novice baker, but it doesn't have to be.</p>
                        <p>Every month, we combine some of our favorite sourdough recipes together.</p>
                    </div>

                    <div className="container_handCrafted">
                        <h1>Hand Crafted</h1>
                        <p>Want to learn more about baking and the secrets of bread making?</p>
                        <p>Join our quarterly Hand Crafted courses in our store.</p>
                    </div>

                    <div className="container_community">
                        <h1>Community</h1>
                        <p>Looking for a venue to host an event?</p>
                        <p>CAMPOS welcome creative souls from all walks of life.</p>
                    </div>

                    <div className="container_figure_adicional">
                        <img className="figure_adicional" src={centroDeReunion} alt="Error" />
                    </div>
                </div>

                {/* Parte 6 */}
                <div className="container_gallery">
                    <div className="lider_figure">
                        <div className="figure1"><img src={figure1} alt=":c" /></div>
                        <div className="figure2"><img src={figure2} alt=":c" /></div>
                        <div className="figure3"><img src={figure3} alt=":c" /></div>
                        <div className="figure4"><img src={figure4} alt=":c" /></div>
                        <div className="figure5"><img src={figure5} alt=":c" /></div>
                        <div className="figure6"><img src={figure6} alt=":c" /></div>
                    </div>

                    <p className="sigueme_en_instagram" >Follow us on instagram @CAMPOS</p>
                </div>

                {/* Parte 7 */}
                <div className="container_footer_book_table">
                    <h1>BOOK A TABLE</h1>
                    <p>Breakfast, lunch, or weekend brunch, we're always open for reservations.</p>
                    <Link to="/book-table" ><button>BOOK A TABLE</button></Link>  
                </div>

                <FooterCampos />

            </section>
        </>
     );
}
 
export {Inicio};
