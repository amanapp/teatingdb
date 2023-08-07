"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodbconnection_1 = require("./Database/mongodbconnection");
const video_1 = __importDefault(require("./Database/model/video"));
const store_routes_1 = require("./routes/store.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/product', store_routes_1.getvideo);
app.set('view engine', 'hbs');
app.set("views", "view");
app.get('/', (req, res) => {
    res.render('index.hbs');
});
const port = 3002;
app.listen(port, () => {
    (0, mongodbconnection_1.connection)();
    video_1.default;
    console.log(`port is running in ${port}`);
});
//# sourceMappingURL=index.js.map