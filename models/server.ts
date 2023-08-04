import express from 'express';
import router from '../routes/usuario';
import cors from 'cors';
import db from '../db/conection';
class Server{
    private app:express.Application;
    private port:string;
    private apiPath={
        users:'/api/usuarios'
    };

    constructor(){
        this.app=express();
        this.port=process.env.PORT || '8000';
        this.dbConection();
        this.middlewares();
        this.routes();
        this.app.use(express.static('public'));


    }
    async dbConection(){
        try {
            await db.authenticate();
            console.log('db: online');
            
        } catch (error:any) {
            throw new Error(error);
            
        }
    }
    middlewares(){
        //TODO cors
        
        this.app.use(cors());
        this.app.use(express.json());
        
    }
    routes(){
        this.app.use(this.apiPath.users,router);
        
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor en puerto',`${this.port}`);
            
        })
    }
    
}
export default Server;