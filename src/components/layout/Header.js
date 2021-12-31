import './../../styles/components/layout/Header.css'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

//la diferencia entre link y NavLink es que navlink permite agregar la clase activo

const Header = (props) => {
    return (
        <header className="header">
            <div className="contenedor-header holder">

                <div className="logo-header">
                    <img className="img-logo" width="70" src="images/logo1.png" alt="Logo Con codigos" />
                    <div className="texto-logo-header">
                        <h1>CON CODIGOS</h1>
                        <p>El A B C de la programación</p>
                    </div>

                </div>

                <nav className="nav">
                    <label className="icon" id="icon">
                        <i className="fas fa-bars"></i>
                    </label>

                    <ul className="nav-ul holder">


                        {/* <li className="item"><Link to="/">Inicio</Link></li>
                        <li className="item"><Link to="/cursos">Cursos</Link></li>
                        <li className="item"><Link to="/novedades">Novedades</Link></li>
                        <li className="item"><Link to="/contacto">Contacto</Link></li> */}

                        <li className="item navItem" id="navItems">  <NavLink activeClassName="activo" exact to="/">Inicio</ NavLink></li>
                        <li className="item navItem" id="navItems">  <NavLink activeClassName="activo" exact to="/cursos">Cursos</ NavLink></li>
                        <li className="item navItem" id="navItems">  <NavLink activeClassName="activo" exact to="/novedades">Novedades</ NavLink></li>
                        <li className="item navItem" id="navItems">  <NavLink activeClassName="activo" exact to="/contacto">Contacto</ NavLink></li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header