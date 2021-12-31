import './../../styles/components/layout/Footer.css'

const Footer = (props) => {
    return (
        <footer>
            <div className="contenedor__footer holder">

                <div className="redes-sociales__footer">
                    <p className="redes-sociales__siguenos__footer"> Siguenos en:</p>

                    <p>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className='redes-sociales__icon__footer bx bxl-facebook-circle'></i>
                        </a>
                    </p>

                    <p>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <i className='redes-sociales__icon__footer bx bxl-linkedin-square'></i>
                        </a>

                    </p>

                    <p>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <i className='redes-sociales__icon__footer bx bxl-twitter'></i>
                        </a>
                    </p>

                    <p>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i className='redes-sociales__icon__footer bx bxl-instagram'></i>
                        </a>

                    </p>

                    <p>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <i className='redes-sociales__icon__footer bx bxl-github'></i>
                        </a>

                    </p>


                </div>

                <div className="subscribete__footer" >
                    <h3>Recibe todas las novedades:</h3>
                    <form action="" className="form__footer">
                        <input type="email" className="inputEmail__form__footer" placeholder="Escribe tu email" required />
                        <input type="submit" className="inputSubmit__form__footer boton" value="Subscríbete" />
                    </form>
                </div>


            </div>

            <p className="p__footer">Creado y diseñado por @JackyOS</p>

        </footer>
    )
}

export default Footer