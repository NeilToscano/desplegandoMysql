import { Sequelize } from "sequelize";

const db=new Sequelize(`${process.env.DB_NAME || 'node'}`,`${process.env.DB_USER || 'root'}`,`${process.env.DB_PASSWORD || '12345678'}`,{
    host:process.env.DB_HOST || 'localhost',
    dialect:'mysql',
    port:parseInt(process.env.DB_PORT || '3306')
    
});
export default db;
