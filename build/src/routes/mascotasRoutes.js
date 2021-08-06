"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mascotasController_1 = require("../controllers/mascotasController");
var MascotasRoutes = /** @class */ (function () {
    function MascotasRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    MascotasRoutes.prototype.config = function () {
        this.router.get('/', /*[checkJwt],*/ mascotasController_1.mascotaController.lista);
        this.router.get('/listaByUsuario/:username', /*[checkJwt],*/ mascotasController_1.mascotaController.listaByUsuario);
        this.router.put('/', /*[checkJwt],*/ mascotasController_1.mascotaController.insert);
        this.router.post('/', /*[checkJwt],*/ mascotasController_1.mascotaController.update);
        this.router.delete('/:cveMascota' /*, [checkJwt]*/, mascotasController_1.mascotaController.delete);
    };
    return MascotasRoutes;
}());
var mascotaRoutes = new MascotasRoutes();
exports.default = mascotaRoutes.router;
