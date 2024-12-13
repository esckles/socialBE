"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    avater: {
        type: String,
    },
    avaterID: {
        type: String,
    },
    friends: {
        type: [],
    },
    posts: {
        type: [],
    },
});
exports.default = (0, mongoose_1.model)("user", userModel);
