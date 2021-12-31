import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/pages/CursosPage.css'
import LeftArrow from "../assets/left-arrow-2.svg"
import RightArrow from "../assets/right-arrow-2.svg"
import Slider from "react-slick";

import { animateScroll as scroll } from "react-scroll"

import { useState } from 'react'

const CursosPage = (props) => {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const onClickUp = () => {
        scroll.scrollToTop()
    }


    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );

    const settingsNav = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft style={{ background: "#fff" }} />,
        nextArrow: <SlickArrowRight />,
    };


    return (
        <main className="cursos-container holder">

            <p className="titulo-inicio"> CURSOS</p>

            <div className="guiaNav-container">
                <Slider {...settingsNav}>
                    <div className="li-container-nav">
                        <li
                            className={toggleState === 1 ? "li-guia-cursos-nav active-tabs-nav" : "li-guia-cursos-nav"}
                            onClick={() => toggleTab(1)}
                        > Fundamentos </li>
                    </div>


                    <div className="li-container-nav">
                        <li
                            className={toggleState === 2 ? "li-guia-cursos-nav active-tabs-nav" : "li-guia-cursos-nav"}
                            onClick={() => toggleTab(2)}
                        > Inglés </li>
                    </div>


                    <div className="li-container-nav">
                        <li
                            className={toggleState === 3 ? "li-guia-cursos-nav active-tabs-nav" : "li-guia-cursos-nav"}
                            onClick={() => toggleTab(3)}
                        >Javascript</li>
                    </div>
                    <div className="li-container-nav">
                        <li
                            className={toggleState === 4 ? "li-guia-cursos-nav active-tabs-nav" : "li-guia-cursos-nav"}
                            onClick={() => toggleTab(4)}
                        >Node JS</li>
                    </div>

                    <div className="li-container-nav">
                        <li
                            className={toggleState === 5 ? "li-guia-cursos-nav active-tabs-nav" : "li-guia-cursos-nav"}
                            onClick={() => toggleTab(5)}
                        >React JS</li>
                    </div>

                </Slider>

            </div>

            <div className="contenedor-guia-cursos " id="guia">
                <ul className="tabs ul-guia-cursos">

                    <li
                        className={toggleState === 1 ? "li-guia-cursos active-tabs" : "li-guia-cursos"}
                        onClick={() => toggleTab(1)}
                    >Fundamentos</li>

                    <li
                        className={toggleState === 2 ? "li-guia-cursos active-tabs" : "li-guia-cursos"}
                        onClick={() => toggleTab(2)}
                    >Inglés</li>

                    <li
                        className={toggleState === 3 ? "li-guia-cursos active-tabs" : "li-guia-cursos"}
                        onClick={() => toggleTab(3)}
                    >Javascript</li>

                    <li
                        className={toggleState === 4 ? "li-guia-cursos active-tabs" : "li-guia-cursos"}
                        onClick={() => toggleTab(4)}
                    >Node JS</li>

                    <li
                        className={toggleState === 5 ? "li-guia-cursos active-tabs" : "li-guia-cursos"}
                        onClick={() => toggleTab(5)}
                    >React JS</li>

                </ul>
            </div>


            <div className="contenedor-cursos">

                <div className={toggleState === 1 ? "contenedor-curso active-content" : "contenedor-curso"}>
                    <h2>Fundamentos de la programación</h2>
                    <p className="subtiulo-p">Los fundamentos de programación son las bases comunes a todos los programas. Es lo primero que tendrás que aprender incluso antes de elegir el programa con el que quieres programar.
                    </p>

                    <div className="contenedor-tarjetas" >
                        <div className="tarjeta-curso" >
                            <img src="images/cursos/teoria-fundamentos.png" alt="Apuntes" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Apuntes I</h3>
                                <p className="tarjeta__p">Material de lectura: Algoritmos, Conceptos de Organización de Computadoras, Matemática, entre otros temas.</p>
                                <a href="http://weblidi.info.unlp.edu.ar/catedras/ingreso/index.html?fbclid=IwAR0ausIFnYv4ml39Hfb5MBAeurikth4KfpMFgoOM3JDIXddwcZ-aVMi8fgI" className="boton btn-curso" target="_blank" rel="noopener noreferrer">Comienza a leer</a>
                            </div>

                        </div>

                        <div className="tarjeta-curso">
                            <img src="images/cursos/teoria-fundamentos2.png" alt="Apuntes: licenciatura informatica" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Apuntes II </h3>
                                <p className="tarjeta__p">Material de estudio de la carrera de licenciatura en informatica del centro de apuntes CEFI
                                </p>
                                <a href="http://apuntes.lafuenteunlp.com.ar/files.php?path=%2F" className="boton btn-curso" target="_blank" rel="noopener noreferrer">Sigue leyendo</a>
                            </div>

                        </div>


                        <div className="tarjeta-curso">
                            <img src="images/cursos/mumuki-fundamentos-practica.png" alt="Mumuki" className="tarjeta-img" />
                            <div className="tarjeta-texto" >
                                <h3 className="tarjeta__titulo">¡Aprende jugando!</h3>
                                <p className="tarjeta__p">Mumuki es una plataforma que propone una manera única e innovadora de enseñar a programar.
                                </p>
                                <a href="https://mumuki.io/paths" className="boton btn-curso" target="_blank" rel="noopener noreferrer">Comienza a Jugar</a>

                            </div>
                        </div>

                        <div className="tarjeta-curso">
                            <img src="images/cursos/pilas-bloques.jpg" alt="Pilas-Bloques" className="tarjeta-img" />
                            <div className="tarjeta-texto" >
                                <h3 className="tarjeta__titulo">¡Programá en clase!</h3>
                                <p className="tarjeta__p">Pilas Bloques es una aplicación para aprender a programar, desarrollada especialmente para el aula.
                                </p>
                                <a href="https://pilasbloques.program.ar" className="boton btn-curso" target="_blank" rel="noopener noreferrer">Juega y aprende</a>

                            </div>
                        </div>


                        <div className="tarjeta-curso">
                            <img src="images/cursos/todo-code-fundamentos.png" alt="Todo code" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">TODO CODE</h3>
                                <p className="tarjeta__p">Un canal de youtube para aprender programación e informática 🖥️ de manera fácil, sencilla y por sobre todo GRATUITA!
                                </p>
                                <a href="https://www.youtube.com/playlist?list=PLQxX2eiEaqbzRVxjkstjLmmn9enb0x3zi" className="boton btn-curso" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                            </div>

                        </div>


                    </div>
                </div>

                <div className={toggleState === 2 ? "contenedor-curso active-content" : "contenedor-curso"}>
                    <h2>Inglés</h2>
                    <p className="subtiulo-p">Tener conocimientos del idioma inglés ayuda notablemente a ser un/a gran programador/a. Prueba con estos cursos y complementalo con peliculas o series en inglés para ir asimilandolo.
                    </p>

                    <div className="contenedor-tarjetas" >
                        <div className="tarjeta-curso" >
                            <img src="images/cursos/duolingo-ingles.jpg" alt="Duolingo" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Duolingo</h3>
                                <p className="tarjeta__p">Plataforma para incrementar vocabulario, mejorar pronunciación y practicar comprensión auditiva con pequeñas frases.</p>
                                <a href="https://es.duolingo.com/" className="boton btn-curso" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                            </div>
                        </div>



                        <div className="tarjeta-curso" id="ingles">
                            <img src="images/cursos/curso-ingles.png" alt="Curso inglés gratis" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Curso-Inglés</h3>
                                <p className="tarjeta__p"> Una plataforma donde podrá aprender y practicar el idioma inglés de una forma fácil y divertida.</p>
                                <a href="https://www.curso-ingles.com/" className="boton btn-curso" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                            </div>
                        </div>

                        <div className="tarjeta-curso" id="ingles">
                            <img src="images/cursos/curso-youtube-ingles.png" alt="Curso inglés en youtube" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Pacho8a</h3>
                                <p className="tarjeta__p">Con casi 120 videos, este es un curso de ingles desde cero que te ayudara a aprender inglés de manera sencilla.</p>
                                <a href="https://www.youtube.com/playlist?list=PLgrNDDl9MxYmUmf19zPiljdg8FKIRmP78" className="boton btn-curso" target="_blank" rel="noopener noreferrer">Mira el video</a>
                            </div>

                        </div>


                    </div>


                </div>

                <div className={toggleState === 3 ? "contenedor-curso active-content" : "contenedor-curso"}>
                    <h2>Javascript</h2>
                    <p className="subtiulo-p">
                        Antes de aprender JavaScript, te aconsejamos que aprendas los fundamentos de HTML y CSS. Mientras HTML y CSS controlan el contenido y el estilo de una página web, JavaScript se utiliza para hacerlo interactivo. <br />
                    </p>

                    <div className="contenedor-tarjetas">

                        <div className="tarjeta-curso" >
                            <img src="images/cursos/apunte-html-js.png" alt="Apuntes HTML ManzDev" className="tarjeta-img" />
                            <div className="tarjeta-texto" />
                            <h3 className="tarjeta__titulo">HTML - APUNTES</h3>
                            <p className="tarjeta__p">LenguajeHTML es un sitio web donde encontrarás información sobre HTML.</p>
                            <a href="https://lenguajehtml.com/" className="boton" target="_blank" rel="noopener noreferrer">Comienza a leer</a>
                        </div>

                        <div className="tarjeta-curso" >
                            <img src="images/cursos/videos-html.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto" />
                            <h3 className="tarjeta__titulo">HTML - AlexCG</h3>
                            <p className="tarjeta__p">Jordan Alexander, web developer frontend, te ayudará a aprender diseño web con HTML5.</p>
                            <a href="https://www.youtube.com/playlist?list=PLP7LlHfxfuM_GytQDzmzbTnpaFXIZOQ9D" className="boton" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                        </div>

                        <div className="tarjeta-curso">
                            <img src="images/cursos/apunte-css-js.png" alt="Apuntes CSS ManzDev" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">CSS - APUNTES</h3>
                                <p className="tarjeta__p">LenguajeJS es un sitio web donde encontrarás información sobre CSS.</p>
                                <a href="https://lenguajecss.com/css/" className="boton" target="_blank" rel="noopener noreferrer">Comienza a leer</a>
                            </div>
                        </div>

                        <div className="tarjeta-curso">
                            <img src="images/cursos/video-css.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">CSS - AlexCG</h3>
                                <p className="tarjeta__p">Jordan Alexander, web developer frontend, te ayudará a aprender diseño web con CSS3.</p>
                                <a href="https://www.youtube.com/playlist?list=PLP7LlHfxfuM8pAs_N7JOEvBIcpgTDiHud" className="boton" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                            </div>
                        </div>

                        <div className="tarjeta-curso">
                            <img src="images/cursos/apunte-js-js.png" alt="Apuntes JS ManzDev" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">JS - APUNTES</h3>
                                <p className="tarjeta__p">LenguajeJS es un sitio web donde encontrarás información JavaScript.</p>
                                <a href="https://lenguajejs.com/" className="boton" target="_blank" rel="noopener noreferrer">Comienza a leer</a>
                            </div>
                        </div>

                        <div className="tarjeta-curso">
                            <img src="images/cursos/soyDalto.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Soy Dalto</h3>
                                <p className="tarjeta__p">Más de 50 horas de contenido donde podrás aprender HTML, CSS, JS desde cero.</p>
                                <a href="https://www.youtube.com/playlist?list=PLE8uP447fYpgOwKgbypiCGSz7veY2MLGb" className="boton" target="_blank" rel="noopener noreferrer">Comienza ahora</a>
                            </div>
                        </div>

                        <div className="tarjeta-curso">
                            <img src="images/cursos/freecodecamp.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">FreeCodeCamp</h3>
                                <p className="tarjeta__p">Plataforma gratuita con miles de horas de contenido interactivo y accesible para todo el mundo.   </p>
                                <a href="https://www.freecodecamp.org/espanol/learn/" className="boton" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                            </div>
                        </div>

                        <div className="tarjeta-curso">
                            <img src="images/cursos/curso-js-completo-js.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Argentina Programa</h3>
                                <p className="tarjeta__p">Curso super completo de Javascript que incluye HTML,CSS, Git/GitHub, Bootstrap, jQuery y mucho más.   </p>
                                <a href="https://argentinaprograma.com/curso-javascript" className="boton" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={toggleState === 4 ? "contenedor-curso active-content" : "contenedor-curso"}>
                    <h2>Node JS</h2>
                    <p className="subtiulo-p">Node.js es un entorno JavaScript de lado de servidor que utiliza un modelo asíncrono y dirigido por eventos. Uno de los puntos fuertes de Node.js es su capacidad de mantener muchas conexiones abiertas y esperando.
                    </p>

                    <div className="contenedor-tarjetas">
                        <div className="tarjeta-curso" >
                            <img src="images/cursos/apuntes-node.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">APUNTES</h3>
                                <p className="tarjeta__p">Todos los apuntes que necesitas para poder instalar NODE JS y sacarle el mayor provecho.</p>
                                <a href="https://apuntes.de/nodejs/#gsc.tab=0" className="boton" target="_blank" rel="noopener noreferrer">Comienza a leer</a>
                            </div>
                        </div>

                        <div className="tarjeta-curso" >
                            <img src="images/cursos/curso-node-video.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Node con FAZT</h3>
                                <p className="tarjeta__p">Introducción practica para Desarrolladores Web, que tiene como objetivo crear aplicaciones Backend, utilizando Javascript.</p>
                                <a href="https://www.youtube.com/watch?v=BhvLIzVL8_o" className="boton" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                            </div>
                        </div>


                        <div className="tarjeta-curso" >
                            <img src="images/cursos/curso-node-freecodecamp.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Node y Express</h3>
                                <p className="tarjeta__p">Curso super completo de 8 horas organizado por FreeCodeCamp. Está en inglés pero se le puede agregar subtitulos en castellano.</p>
                                <a href="https://www.youtube.com/watch?v=Oe421EPjeBE" className="boton" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                            </div>
                        </div>




                    </div>


                </div>

                <div className={toggleState === 5 ? "contenedor-curso active-content" : "contenedor-curso"}>
                    <h2>React JS</h2>
                    <p className="subtiulo-p">React es un framework de Javascript para crear interfaces de usuario. Antes de aprender react, se recomienda tener una base de Javascript.
                    </p>

                    <div className="contenedor-tarjetas">


                        <div className="tarjeta-curso" >
                            <img src="images/cursos/curso-react-js.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Argentina Programa</h3>
                                <p className="tarjeta__p">Curso gratuito organizado por el Ministerio de Desarrollo Productivo de Argentina sobre React y redux.</p>
                                <a href="https://argentinaprograma.com/clases-react" className="boton" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                            </div>
                        </div>


                        <div className="tarjeta-curso" >
                            <img src="images/cursos/pagina-oficial-react-js.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">APUNTES</h3>
                                <p className="tarjeta__p">La página oficial de react ofrece tutoriales muy bien explicados, tanto en inglés como en español.</p>
                                <a href="https://es.reactjs.org/" className="boton" target="_blank" rel="noopener noreferrer">Comienza a estudiar</a>
                            </div>
                        </div>


                        <div className="tarjeta-curso" >
                            <img src="images/cursos/scrimba-react.png" alt="" className="tarjeta-img" />
                            <div className="tarjeta-texto">
                                <h3 className="tarjeta__titulo">Scrimba</h3>
                                <p className="tarjeta__p">Novedosa plataforma interactiva donde podés aprender React practicando código sobre el video de la clase.</p>
                                <a href="https://scrimba.com/learn/learnreact" className="boton" target="_blank" rel="noopener noreferrer">Comienza este curso</a>
                            </div>
                        </div>

                    </div>


                </div>

            </div>


            <button className="scroll-up" onClick={onClickUp}>
                <span className="fa fa-chevron-up"> Volver arriba </span>
            </button>

        </main >




    )
}

export default CursosPage