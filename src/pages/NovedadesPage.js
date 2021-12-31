import { animateScroll as scroll } from "react-scroll"
import React, { useState, useEffect } from "react"
import '../styles/pages/NovedadesPage.css'

import Novedad from "./Novedad.js"

import Axios from "axios"


const NovedadesPage = () => {


    const onClickUp = () => {
        scroll.scrollToTop()
    }


    const [novedades, setNovedades] = useState([])

    useEffect(() => {
        const getNovedadesYa = () => {
            Axios.get('http://localhost:3001/api/novedades')
                .then(res => { setNovedades(res.data)
            })
        }
        getNovedadesYa()
    
    }, [])







    return (


        <main className="novedades holder">

            <p className="titulo-inicio" style={{width:"90%"}} > NOVEDADES </p>


            <Novedad novedades={novedades} />



            <button className="scroll-up" onClick={onClickUp}>
                <span className="fa fa-chevron-up"> Volver arriba </span>
            </button>

        </main>

    )
}

export default NovedadesPage