import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { obtenerDatos } from "../controllers/froms_service.jsx";

const Forms = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await obtenerDatos();
                console.log(result);  // Imprimir los datos en la consola
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!Array.isArray(data) || data.length === 0) {
        return <p>No data available</p>;
    }

    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" id="" placeholder='Ingrese su nombre' />

                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="" placeholder='Ingrese su númer de celular' />
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" id="" placeholder='Ingrese su correo electronico' />

                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="número de celular" />
                </div>
            </form>
        </div>
    );
};

export default Forms;