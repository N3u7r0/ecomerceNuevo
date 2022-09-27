import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalle = () => {
    const [item, setItem] = useState([])
    const { tipo } = useParams();

    useEffect(() => {
        const getData = () => {
            fetch('data.json', { headers: { 'Content-Type': 'MI-APP/json', 'Accept': 'MI-APP/json' } })
                .then(respuesta => respuesta.json())
                .then(productosTodos => {
                    console.log(productosTodos[tipo]);
                    setItem(productosTodos[tipo]);
                }
                );
        }
        getData();
    }, [tipo]);

    return (<div className="container">
        <div className="card">
            <img src={item.foto} className="card-img-top" alt={item.nombre} />
            <div className="card-body">
                <h1 className="card-title">{item.marca}</h1>
                <h2 className="card-text">{item.nombre}</h2>
                <p className="card-text">{item.modelo}</p>
                <p className="card-text">{item.precio}</p>
            </div>
        </div>
    </div>
    )
}

export default Detalle;