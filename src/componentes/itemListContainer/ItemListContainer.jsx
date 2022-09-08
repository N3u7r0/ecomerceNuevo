import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemListContainer";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const productos = [
            { "id": 1, "nombre": "Ibanez PIA3761 Steve Vai Signature ", "imagen": "https://media.guitarcenter.com/is/image/MMGS7/L72871000005000-00-720x720.jpg", "precio": 3499 },
            { "id": 2, "nombre": "ESP USA Eclipse", "imagen": "https://media.guitarcenter.com/is/image/MMGS7/J05538000004000-00-720x720.jpg", "precio": 3599 },
            { "id": 3, "nombre": "Fender American Ultra Luxe Stratocaster HSS", "imagen": "https://media.guitarcenter.com/is/image/MMGS7/L81806000001000-00-720x720.jpg", "precio": 2599 },
            { "id": 4, "nombre": "Gibson ES-345 Semi-Hollow", "imagen": "https://media.guitarcenter.com/is/image/MMGS7/L73698000001000-00-720x720.jpg", "precio": 3799 }
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;