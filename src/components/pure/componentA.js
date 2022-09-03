import { useState } from 'react';
import { ComponentA } from '../../models/component.class';
import PropTypes from 'prop-types';


const ComponentDescription = ( { comp } ) => {

    const estado = comp.conectado
    const [conectado, setconectado] = useState(estado);

    const cambiarEstado = () => {
    setconectado(!conectado)
    }

    return (
        <div>
            <h2>Contacto</h2>
            <ul>
                <li>
                    Nombre: { comp.nombre }
                </li>
                <li>
                    Apellido: { comp.apellido }
                </li>
                <li>
                    Email: { comp.email }
                </li>
                <li>
                    Está conectado: { conectado ? "Contacto en línea" :  "Contacto No Disponible"}
                </li>
            </ul>
            <button onClick={cambiarEstado}>Cambiar estado</button>
            
        </div>

    );
}

ComponentDescription.propTypes = {
    comp: PropTypes.instanceOf(ComponentA)
};


export default ComponentDescription;
