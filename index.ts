import dotenv from 'dotenv';
import Server from './models/server';
dotenv.config();
export const nombre='neil';
console.log(nombre);
const server= new Server();
server.listen();
