import { Request,Response } from "express"
import Usuario from "../models/usuario"
export const getUsers= async(req:Request,res:Response)=>{
    const usuarios= await Usuario.findAll({
        attributes:['nombre','precio','cantidad']
    });
    res.json(usuarios);
    // res.json({
    //     msg:'getUsuarios'
    // })
}
export const getUsuario= async(req:Request,res:Response)=>{
    const {id}=req.params;
    const usuarioById=  await Usuario.findOne({ where: { 'id': id },attributes:['nombre','precio','cantidad'] })
    res.json({
        usuarioById,
        id
    })
}
export const postUsuario=async(req:Request,res:Response)=>{
    const {nombre,precio,cantidad}=req.body;
    const newUsuario= await Usuario.create({nombre:`${nombre}`,precio:`${precio}`,cantidad:`${cantidad}`});
   await newUsuario.save();
    // const {body} = req;
    res.json({
        msg:'postUsuario',
        newUsuario
    })
}
export const putUsuario=(req:Request,res:Response)=>{
    const {id} = req.params;
    res.json({
        msg:'putUsuario',
        id
    })
}
export const deleteUsuario=(req:Request,res:Response)=>{
    const {id} = req.params;
    res.json({
        msg:'deleteUsuario',
        id
    })
}

