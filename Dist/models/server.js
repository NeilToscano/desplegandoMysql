"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cors_1 = __importDefault(require("cors"));
const conection_1 = __importDefault(require("../db/conection"));
class Server {
    constructor() {
        this.apiPath = {
            users: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.dbConection();
        this.middlewares();
        this.routes();
        this.app.use(express_1.default.static('public'));
    }
    dbConection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conection_1.default.authenticate();
                console.log('db: online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        //TODO cors
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPath.users, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor en puerto', `${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map