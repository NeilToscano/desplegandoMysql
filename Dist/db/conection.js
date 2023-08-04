"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(`${process.env.DB_NAME || 'node'}`, `${process.env.DB_USER || 'root'}`, `${process.env.DB_PASSWORD || '12345678'}`, {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: parseInt(process.env.DB_PORT || '3306')
});
exports.default = db;
//# sourceMappingURL=conection.js.map