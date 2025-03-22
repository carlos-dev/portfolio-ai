"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Id {
    static generate() {
        const split1 = Math.random().toString(36).substr(2, 9);
        const split2 = Math.random().toString(36).substr(2, 9);
        const split3 = Math.random().toString(36).substr(2, 9);
        return `${split1}-${split2}-${split3}`;
    }
}
exports.default = Id;
//# sourceMappingURL=Id.js.map