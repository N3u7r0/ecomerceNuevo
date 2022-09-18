import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Producto from "../producto/Producto";

const Productos = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('../stock/stock.json')
            .then(res => res.json)
            .then(json => {
                console.log(json);
                setItems(json);
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {items.map(producto => (
                    <div>
                        <div key={producto.id} className="col-md-3">
                            <Producto item={producto} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productos;