"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnologyModule = void 0;
const common_1 = require("@nestjs/common");
const tecnology_controller_1 = require("./tecnology.controller");
const technology_prisma_1 = require("./technology.prisma");
const db_module_1 = require("../db/db.module");
let TecnologyModule = class TecnologyModule {
};
exports.TecnologyModule = TecnologyModule;
exports.TecnologyModule = TecnologyModule = __decorate([
    (0, common_1.Module)({
        controllers: [tecnology_controller_1.TechnologyController],
        providers: [technology_prisma_1.TechnologyPrisma],
        imports: [db_module_1.DbModule],
    })
], TecnologyModule);
//# sourceMappingURL=tecnology.module.js.map