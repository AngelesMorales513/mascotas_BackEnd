"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var razasController_1 = require("../controllers/razasController");
var GeneralRoutes = /** @class */ (function () {
    function GeneralRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    GeneralRoutes.prototype.config = function () {
        // Obtiene los roles activo en el sistema
        this.router.get('/razas', razasController_1.generalController.razas);
    };
    return GeneralRoutes;
}());
var generalRoutes = new GeneralRoutes();
exports.default = generalRoutes.router;
