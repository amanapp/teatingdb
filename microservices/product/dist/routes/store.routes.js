"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getvideo = void 0;
const callback_api_1 = __importDefault(require("amqplib/callback_api"));
const video_1 = __importDefault(require("../Database/model/video"));
const getvideo = async (req, res) => {
    // const video = new VideoModel({ video:"asdfghj"});
    //  await video.save();
    callback_api_1.default.connect('amqp://localhost', function (err, conn) {
        conn.createChannel(function (err, ch) {
            const queue = 'message_queue_user';
            ch.assertQueue(queue, { durable: false });
            console.log(`wating... result  ${queue}`);
            ch.consume(queue, async function (msg) {
                // console.log("=========msg========",msg);
                console.log("=========msg========", msg.content);
                const insertBuffer = await video_1.default.insertMany({
                    video: msg.content
                });
                // const video = new VideoModel({ video:msg.content.toString});
                // await video.save();
                //  const s=msg;
                console.log("msg", msg.content.toString);
                res.send(msg.content.toString());
            }, { noAck: true });
        });
    });
    // res.send(" this is product micro");
};
exports.getvideo = getvideo;
//# sourceMappingURL=store.routes.js.map