import React from "react";
import { useEffect, useState } from "react";


const DetalleProto = () => {
    const [item, setItem] = useState([])
    

    useEffect(() => {
        const getData = () => {
            fetch('data.json', { headers: { 'Content-Type': 'MI-APP/json', 'Accept': 'MI-APP/json' } })
                .then(respuesta => respuesta.json())
                .then(productosTodos => {
                    console.log(productosTodos[1]);
                    setItem(productosTodos[1]);
                }
                );
        }
        getData();
    }, []);

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

export default DetalleProto;