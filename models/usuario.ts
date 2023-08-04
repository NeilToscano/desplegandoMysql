import {DataTypes} from 'sequelize';
import db from '../db/conection';
const Usuario = db.define('productos',{
    nombre:{
        type:DataTypes.STRING,
        
    },
    precio:{
        type:DataTypes.DECIMAL,

    },
    cantidad:{
        type:DataTypes.INTEGER,

    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW // Opcional: Puedes usar DataTypes.NOW para usar la fecha actual por defecto
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW // Opcional: Puedes usar DataTypes.NOW para usar la fecha actual por defecto
      }
    
})
export default Usuario;