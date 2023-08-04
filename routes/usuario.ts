import { Router } from "express";
import { deleteUsuario, getUsers, getUsuario, postUsuario, putUsuario } from "../controllers/usuarios";
const router = Router();
router.get('/',getUsers);
router.get('/:id',getUsuario);
router.post('/',postUsuario);
router.put('/:id',putUsuario);
router.delete('/:id',deleteUsuario);

export default router;