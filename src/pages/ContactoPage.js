import axios from "axios"; //trabaja el tema de las peticiones
import React, {useState} from "react";


import './../styles/pages/ContactoPage.css'


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email:'',
        motivo:'',
        mensaje:''
    }

    const [sending, setSending] = useState(false); //valor inicial false, no esta e
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState (initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica de traerme los 4 elementos que tengo (name, email, telefono y mensaje)

        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const responsive = await axios.post("/api/contacto", formData);
        setSending(false) 
        setMsg(responsive.data.message);
        if(responsive.data.error === false) {
            setFormData(initialForm);
        }
    }


    return (
        <main className="contenedor-contacto holder">

            <p className="titulo-inicio" style={{width:"90%"}}> CONTACTO </p>

            <div className="columna">
                {/* <h2>Contactanos</h2> */}



                {/* <h4>Tu aporte nos permite seguir creciendo</h4> */}

                {/* <h4>¡Esperamos tu mensaje!</h4> */}

                <form className="formulario" action="/contacto" method="post" onSubmit={handleSubmit}>

                    <p className="p__input__contacto p__input-nombre-email">
                        <input type="text" className="input__contacto" placeholder="Nombre" required name="nombre" value={formData.nombre} onChange={handleChange} />

                        <input type="email" className="input__contacto" placeholder="Email" required name="email" value={formData.email} onChange={handleChange} />
                    </p>

                    <p className="p__input__contacto p__input_select">

                        <select className="select__contacto" name="motivo" value={formData.motivo} onChange={handleChange}>
                            <option className="opcion-uno" value="">--Motivo de consulta--</option>
                            <option value="curso-web">Aportar un curso web</option>
                            <option value="pasantia">Aportar una pasantía</option>
                            <option value="sugerencias">Sugerencias</option>
                            <option value="otro">Otro motivo</option>
                        </select>
                    </p>

                    <p className="p__input__contacto p__input-textarea">
                        <textarea name="mensaje" cols="30" rows="10" placeholder="Escribe aquí..."
                            className="textarea__contacto" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>

                    <p className="accion">
                        <input type="submit" className="boton btn_form" value="Enviar" />
                    </p>

                    {sending ? <p style={{fontStyle: "italic" }}>Enviando...</p>: null}
                    {msg ? <p className="mensaje-form-enviado">{msg}</p> : null}

                </form>

            </div>

        </main>

    )
}

export default ContactoPage