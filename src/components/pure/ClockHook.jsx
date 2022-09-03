import React, { useState , useEffect } from "react";

const ClockHook = () => {

    const persona = {
        fecha: new Date().toLocaleTimeString(),
        nombre: "Mariana",
        apellido: "Spaccesi",
        edad: 0
    }

    const[hour, setHour] = useState(persona.fecha)
    const[age, setAge] = useState(persona.edad)


    useEffect(() => {
        setInterval(() => {
            setHour(new Date().toLocaleTimeString());
        }, 1000)
    }, []);

    const sumarEdad = () => {
        setAge(age +1)
    } 

    useEffect(() => {
        sumarEdad();
    }, [hour]) 

    
    return (
        <div>
            <h1>Hora actual: {hour}</h1>
            <h2>{persona.nombre} {persona.apellido}</h2>
            <h3>Edad: {age}</h3>
        </div>
    );
}

export default ClockHook;
