import React from 'react';

import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';
interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({busca, setBusca}:  Props) {
    return (
        <div className={styles.Buscador} >
                <input 
                    placeholder='Buscar'
                    aria-label='Busca'
                    value={busca}
                    onChange={(evento) => setBusca(evento.target.value)}
                />
                <CgSearch size={20} color='#4c4d5e' />
        </div>
    )
}

export default Buscador;