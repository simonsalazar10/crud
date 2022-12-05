import database from "../database/ConexionDatabase";
import { DataTypes} from "sequelize";

const Producto =  database.define('productos', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
});

export default Producto;