import React from 'react';
import { ComponentA } from '../../models/component.class';
import ComponentDescription from '../pure/componentA';



const ComponentList = () => {
    const defaultComponent = new ComponentA("Mariana", "Spaccesi", "mariana@mariana.com", true);

    return (
        <div>
            <ComponentDescription comp={defaultComponent} />
            
        </div>
    );


}

export default ComponentList;