"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_routes_1 = require("./routes/get.routes");
const multer_middleware_1 = require("./middleware/multer.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/user', multer_middleware_1.upload.single('image'), get_routes_1.getDetails);
const port = 3000;
app.listen(port, () => {
    console.log(`port is running in ${port}`);
});
//# sourceMappingURL=index.js.map