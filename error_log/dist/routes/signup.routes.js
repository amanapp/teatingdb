"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../Database/model/user.model"));
const error_write_1 = require("./error_write");
exports.default = async (req, res) => {
    try {
        const { name, email, user_id, password, phone_no } = req.body;
        const hashedPassword = await bcrypt_1.default.hash(password, 2);
        const users = new user_model_1.default({
            name,
            email,
            user_id,
            password: hashedPassword,
            phone_no
        });
        console.log(users);
        await users.save();
        res.status(201).json({ message: 'User Signup successfully' });
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
        (0, error_write_1.writeErrorToFile)(e);
    }
};
//# sourceMappingURL=signup.routes.js.map