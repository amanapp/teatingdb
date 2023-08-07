"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeErrorToFile = void 0;
const fs_1 = __importDefault(require("fs"));
function writeErrorToFile(error) {
    const errorMessage = `${new Date().toISOString()} - ${error.stack}\n`;
    try {
        fs_1.default.appendFileSync('error.log', errorMessage);
    }
    catch (error) {
        console.error(`Error writing to file: ${error.message}`);
    }
}
exports.writeErrorToFile = writeErrorToFile;
//# sourceMappingURL=error_write.js.map