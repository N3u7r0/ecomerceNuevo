import React from "react";

const Producto = ({ item }) => {
    return (
        <div>
            <div className="card">
                <img src={item.foto} className="card-img-top" alt={item.nombre}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.marca}</h5>
                        <p className="card-text">{item.nombre}</p>
                        <p className="card-text">{item.modelo}</p>
                        <p className="card-text">{item.precio}</p>
                        <a href="#" className="btn btn-primary">Ver mas...</a>
                    </div>
            </div>
        </div>
    )
}

export default Producto;