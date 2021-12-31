// const cloudinary = require('cloudinary').v2

const Novedad = ({ novedades }) => {


    

    return (
        

        <div>

            {
                novedades.map(novedad => (

                    
                    <div className="columna" key={novedad.id}>

                        <h3>{novedad.titulo}</h3>
                        <h4>{novedad.subtitulo}</h4>
                        <h4>Fecha limite: {novedad.vencimiento}</h4>
                        {/* <img width="500" src={cloudinary.url(novedad.img_id, {width: 960, height: 960, crop: 'fill'})} alt=""/> */}
                        <p dangerouslySetInnerHTML={{__html: novedad.cuerpo}}></p>
                        {/*¿como hacer que react lea etiquetas html que vienen de la base de datos u otro lado? -->  dangerouslySetInnerHTML  
                        https://coderrocketfuel.com/article/how-to-dangerously-set-inner-html-in-react */}

                        <a href={novedad.url} rel="noreferrer" className="boton" target="_blank">Inscribite</a>
                    </div>
                    
                
                
                ))
            }
            




        </div>



    )



}


export default Novedad