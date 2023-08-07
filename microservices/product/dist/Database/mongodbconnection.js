"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const url = "mongodb://localhost:27017/microservice_video";
const connection = async () => {
    try {
        await mongoose_1.default.connect(url);
        console.log("Succesfully connected to the db");
    }
    catch (e) {
        console.log(e, "ERRRRRR");
    }
};
exports.connection = connection;
//# sourceMappingURL=mongodbconnection.js.map