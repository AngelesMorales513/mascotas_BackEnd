"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
// routes
var usuariosRoutes_1 = __importDefault(require("./src/routes/usuariosRoutes"));
var authRoutes_1 = __importDefault(require("./src/routes/authRoutes"));
var mascotasRoutes_1 = __importDefault(require("./src/routes/mascotasRoutes"));
var razaRoutes_1 = __importDefault(require("./src/routes/razaRoutes"));
var Server = /** @class */ (function () {
    // Constructor de nuestro servidor
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // Configuración del servidor
    Server.prototype.config = function () {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    // Rutas para mi APIRest
    Server.prototype.routes = function () {
        this.app.use('/mascota', mascotasRoutes_1.default);
        this.app.use('/usuario', usuariosRoutes_1.default);
        this.app.use('/auth', authRoutes_1.default);
        this.app.use('/raza', razaRoutes_1.default);
    };
    // Inicialización del servidor
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("Server on port", _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
