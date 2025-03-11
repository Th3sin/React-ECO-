import styles from './mapa.module.css';
import { Link } from 'react-router-dom';

function Mapa() {
    return (
        <div className={styles.mapBox}>
          <h1>Localização dos Ecopontos</h1>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d117038.93242014991!2d-46.71274482954122!3d-23.551678445343168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sponto%20de%20descarte!5e0!3m2!1spt-BR!2sbr!4v1732460621148!5m2!1spt-BR!2sbr"
            width="100%" 
            height="550px" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    );
}

export default Mapa;
