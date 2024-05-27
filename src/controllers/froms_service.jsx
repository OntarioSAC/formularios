import axios from "axios";

const API_URL = "http://192.168.0.14:8080/api/v1";

export const obtenerDatos = async () => {
    try {
        const response = await axios.get(`${API_URL}/proyectos`, {
            auth: {
                username: 'rodrigo',
                password: 'admin'
            }
        });
        console.log(response.data); // Imprime los datos en la consola
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

