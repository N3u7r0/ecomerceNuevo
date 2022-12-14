import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Producto from "../producto/Producto";

const Productos = () => {
    const [items, setItems] = useState([]);
    const { tipo} = useParams();

    useEffect(() => {
        let categoria = "";
        if (tipo === "guitarra") {
            categoria = "Guitarra";
        } else if (tipo === "bajo") {
            categoria = "Bajo";
        } else if (tipo === "bateria") {
            categoria = "Bateria";
        } else {
            categoria = "todos";
        }
        const getData = () => {
            fetch('data.json', { headers: { 'Content-Type': 'MI-APP/json', 'Accept': 'MI-APP/json' } })
                .then(respuesta => respuesta.json())
                .then(productosTodos => {
                    if (categoria === "todos") {
                        setItems(productosTodos);
                    } else {
                        const arr_productos = productosTodos.filter(producto => producto.tipo === categoria);
                        setItems(arr_productos);
                    }
                });
        }
        getData();
    }, [tipo])
    
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