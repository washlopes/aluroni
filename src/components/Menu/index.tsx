import { ReactComponent as Logo} from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export default function Menu() {

    const rotas = [
        {
            label: 'Início',
            to: '/'
        },
        {
            label: 'Cardápio',
            to: '/cardapio'
        },
        {
            label: 'Sobre',
            to: '/sobre'
        }
    ];
    
    return (
        <nav className={styles.menu}>
            <Logo />   
            <ul className={styles.menu__list}>
                {rotas.map((rota, index) => (
                    <li key={index} className={styles.menu__link}>
                        <Link to={rota.to} />
                        <a href={rota.to}>{rota.label}</a>
                    </li>
                ))}
            </ul>             
        </nav>
    );
}