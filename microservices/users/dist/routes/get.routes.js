"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetails = void 0;
const callback_api_1 = __importDefault(require("amqplib/callback_api"));
const getDetails = async (req, res) => {
    const { buffer } = req.file;
    console.log(req.file);
    callback_api_1.default.connect('amqp://localhost', function (err, conn) {
        conn.createChannel(function (err, ch) {
            const queue = 'message_queue_user';
            // const msg =JSON.stringify(buffer);
            ch.assertQueue(queue, { durable: false });
            ch.sendToQueue(queue, buffer);
            console.log(`sebt ${buffer} to ${queue}`);
        });
    });
    res.send(" this is users micro");
};
exports.getDetails = getDetails;
//# sourceMappingURL=get.routes.js.map