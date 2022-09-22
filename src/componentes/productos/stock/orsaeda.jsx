import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Producto from "../producto/Producto";

const Productosaaaaaa = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("./stock/stock.json")
            .then(respuesta => respuesta.json())
            .then(productosTodos => {
                console.log(productosTodos);
                setItems(productosTodos);
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {items.map(producto => (
                        <div key={producto.id} className="col-md-3">
                            <Producto item={producto} />
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Productosaaaaaa;