import capa from '../assets/imagemPizza.jpg';
import '../css/Home.css'



const Image = () => {

    return (
        <div className='capa' >
            <img className='img-capa' src={capa} alt="imagem de capa" />
        </div>

    )
}


export default Image;