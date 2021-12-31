import { animateScroll as scroll } from "react-scroll"
import { Link } from "react-scroll"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";

import '../styles/pages/HomePage.css'

const HomePage = (props) => {



    const onClickUp = () => {
        scroll.scrollToTop()
    }

    const onClickDown = () => {
        scroll.scrollToBottom()
    }


    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        fade: true
    };


    return (
        <main>

            <Slider {...settings}>

                <div className="imagenDestacada img1" >

                    <div className="texto-imagen">
                        <h2>¿Querés estudiar Programación gratis?</h2>
                        <h3>Te ayudamos</h3>

                        <div className="container__btn__index">
                            <Link className="boton btn__index" smooth to="container-somos" offset={-120}>¿De qué se trata? </Link>
                            <Link className="boton btn__index" smooth to="guia" offset={-120}> ¿Por dónde empiezo? </Link>

                        </div>

                        {/* importo link desde react scroll */}
                        {/* pongo smooth para que se deslice suavemente */}
                        {/* y outset es para que, al bajar el nav no tape la imagen de la ruta, entonces: no baja tanto */}
                        {/* https://www.youtube.com/watch?v=Nl54MJDR2p8   hora 2:19:00 */}

                    </div>

                    <div className="onda-main"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "#ffffff"}}></path></svg></div>

                </div>

                <div className="imagenDestacada img2" >

                    <div className="texto-imagen">
                        <h2>Introducite en el mundo de la Programación</h2>
                        <h3>Empezá el desafio</h3>


                        <a className="boton btn__index" href="/Cursos"> ¡Quiero aprender! </a>
                        {/* <Link className="boton btn__index" to="/Cursos"> ¡Aprende Ya! </Link> */}
                        {/* con link no funciona -no hace nada al tocar el link- */}


                    </div>

                    <div className="onda-main"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "#ffffff" }}></path></svg></div>

                </div>

                <div className="imagenDestacada img3" >

                    <div className="texto-imagen">
                        <h2>Enteráte de pasantías ofrecidas por empresas </h2>
                        <h3>Oportunidades trainee</h3>

                        <a className="boton btn__index" href="/Novedades">Postularme</a>
                    </div>

                    <div className="onda-main"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "#ffffff" }}></path></svg></div>

                </div>

            </Slider>


            <div className="container-somos holder">

                <h2>¿Quiénes somos?</h2>

                <div className="somos-div">

                    <img className="img-somos" src="images/home/light.svg" alt="trabajando" />

                    <p className="p-frase-bienvenida p-somos"> <img src="images/ico-luz.ico" width="20" alt="lampara-ico" /> <b> Con Codigos </b> es una página educativa que tiene como fin ser el punto de partida para todas aquellas personas que quieran estudiar la programación pero no saben por donde empezar o no tienen los recursos necesarios para realizar una carrera universitaria.
                    </p>

                </div>

                <h2>¿Qué ofrecemos?</h2>

                <div className="somos-div">
                    <p className="p-frase-bienvenida p-somos"> <img src="images/ico-luz.ico" width="20" alt="lampara-ico" /> Ofrecemos numerosos <b>cursos gratuitos</b> para poder aprender programación. No te desanimes si no tienes ningún conocimiento o si te resulta difícil. Aquí encontraras contenidos didácticos e interactivos, tanto teóricos como prácticos, que te ayudaran a recorrer el maravilloso mundo de la programación. </p>

                    <img className="img-somos" src="images/home/coding.svg" alt="trabajando" />

                </div>


                <div className="somos-div">

                    <img className="img-somos" src="images/home/worker.svg" alt="trabajando" />

                    <p className="p-frase-bienvenida p-somos"> <img src="images/ico-luz.ico" width="20" alt="lampara-ico" /> También encontraras <b>capacitaciones gratuitas o pasantias trainee</b> organizadas por empresas o instituciones públicas. Estate alerta, las ofertas tienen fecha límite y las vacantes suelen ser limitadas. <span onClick={onClickDown}> <b> Subscribite </b> </span>  para enterarte de las novedades laborales. </p>
                </div>

                <p className="p-frase-bienvenida2">No necesitas ser una mente maestra, solo con tener muchas ganas, curiosidad y perseverancia tendrás a tu alcance los conocimientos necesarios para realizar páginas web, aplicaciones móviles y mucho más...</p>

            </div>



            <div className="contenedor-ruta" id="guia">

                <div className="holder">
                    <h2>Ruta de aprendizaje</h2>

                    <img className="img-ruta" src="images/ruta3.png" alt="ruta" />

                </div>

            </div>

            <button className="scroll-up" onClick={onClickUp}>
                <span className="fa fa-chevron-up"> Volver arriba </span>
            </button>


        </main>

    )

}

export default HomePage