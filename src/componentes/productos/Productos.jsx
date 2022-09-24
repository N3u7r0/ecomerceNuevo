import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Producto from "../producto/Producto";

const Productos = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getData = () => {
            fetch('data.json', { headers: { 'Content-Type': 'MI-APP/json', 'Accept': 'MI-APP/json' } })
                .then(respuesta => respuesta.json())
                .then(productosTodos => {
                    setItems(productosTodos);
                });
        }
        getData();
    },[])
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
    );
}
export default Productos;