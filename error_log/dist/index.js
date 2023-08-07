"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbconnection_1 = require("./Database/dbconnection");
const user_model_1 = __importDefault(require("./Database/model/user.model"));
const signup_routes_1 = __importDefault(require("./routes/signup.routes"));
const fs_1 = __importDefault(require("fs"));
const node_cron_1 = __importDefault(require("node-cron"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const fileLog = fs.createWriteStream( 'upload/server.log');
// const ErrorLog = fs.createWriteStream( 'upload/Error.log');
// // console.log  = (e) => { 
// //     fileLog.write(util.format(e) + '\n');
// // };
// console.error = (e) => {
//     ErrorLog.write(util.format(e) + '\n');
// }
const task = node_cron_1.default.schedule('*/3 * * * * *', () => {
    const filePath = '/home/user/Videos/error_log/error.log';
    fs_1.default.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Deleted ${filePath}`);
    });
});
// task.stop();
app.post('/signup', signup_routes_1.default);
const port = 3000;
app.listen(port, () => {
    console.log(`port is running in ${port}`);
    (0, dbconnection_1.connection)();
    user_model_1.default;
});
//# sourceMappingURL=index.js.map