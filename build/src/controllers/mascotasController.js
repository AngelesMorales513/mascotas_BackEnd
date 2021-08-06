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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mascotaController = void 0;
var mascotasDao_1 = require("../dao/mascotasDao");
var MascotasController = /** @class */ (function () {
    function MascotasController() {
    }
    MascotasController.prototype.lista = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, mascotasDao_1.daoM.lista()];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(500).json({ message: error_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MascotasController.prototype.listaByUsuario = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var username, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        username = req.params.username;
                        if (username == null) {
                            return [2 /*return*/, res.status(400).json({ message: "No se puede eliminar" })];
                        }
                        return [4 /*yield*/, mascotasDao_1.daoM.listaByUsuario(username)];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(500).json({ message: error_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MascotasController.prototype.insert = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nombreMascota, fechaAdopcion, cvePropietario, raza, mascota, result, ex_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, nombreMascota = _a.nombreMascota, fechaAdopcion = _a.fechaAdopcion, cvePropietario = _a.cvePropietario, raza = _a.raza;
                        if (nombreMascota == null || fechaAdopcion == null || cvePropietario == null || raza == null) {
                            return [2 /*return*/, res.status(400).json({ meesage: "Datos obligatorios" })];
                        }
                        mascota = {
                            nombreMascota: nombreMascota,
                            fechaAdopcion: fechaAdopcion,
                            cvePropietario: cvePropietario,
                            raza: raza,
                        };
                        return [4 /*yield*/, mascotasDao_1.daoM.insert(mascota)];
                    case 1:
                        result = _b.sent();
                        if (result.affectedRows > 0) {
                            return [2 /*return*/, res.json({ meesage: "El registro se realizo exitosamente" })];
                        }
                        else {
                            return [2 /*return*/, res.status(400).json({ meesage: result.message })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _b.sent();
                        res.status(500).json({ message: ex_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MascotasController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var mascota, result, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        mascota = req.body;
                        if (mascota.cveMascota == null) {
                            return [2 /*return*/, res.status(400).json({ meesage: "Error en actualización" })];
                        }
                        return [4 /*yield*/, mascotasDao_1.daoM.update(mascota)];
                    case 1:
                        result = _a.sent();
                        if (result.affectedRows > 0) {
                            return [2 /*return*/, res.json({ meesage: "La actualización se realizó correctamente" })];
                        }
                        else {
                            return [2 /*return*/, res.status(400).json({ meesage: result.message })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_2 = _a.sent();
                        res.status(500).json({ message: ex_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MascotasController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cveMascota, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        cveMascota = req.params.cveMascota;
                        if (cveMascota == null) {
                            return [2 /*return*/, res.status(400).json({ message: "Error al eliminar registro" })];
                        }
                        return [4 /*yield*/, mascotasDao_1.daoM.delete(parseInt(cveMascota))];
                    case 1:
                        result = _a.sent();
                        if (result.affectedRows > 0) {
                            res.json({ message: "Registro eliminado correctamente" });
                        }
                        else {
                            res.status(400).json({ message: result.message });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(400).json({ message: error_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return MascotasController;
}());
exports.mascotaController = new MascotasController();
