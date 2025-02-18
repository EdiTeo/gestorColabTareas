import perfil from './assets/profile.png'
import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
function Card(){
    return(
        <div className="card">
            <img className = "card-image" src={perfil} alt="perfil" />
            <h2 className = "card-title" >Edith Camacho</h2>
            <p className='card-text'>Soy ingenieria en sistemas realizo investigaciones importantes
                de Aprendizaje automatico <strong>(Machine Learning)</strong>...
            </p>
        </div>
    );
}export default Card;