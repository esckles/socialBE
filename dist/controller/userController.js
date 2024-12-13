"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAccount = exports.RegisterAccount = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../model/userModel"));
const RegisterAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const user = yield userModel_1.default.create({
            username,
            email,
            password: hashed,
        });
        return res.status(201).json({
            message: "Account created successfully",
            data: user,
            status: 201,
        });
    }
    catch (error) {
        return res
            .status(404)
            .json({ message: "Error creating account", status: 404 });
    }
});
exports.RegisterAccount = RegisterAccount;
const LoginAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel_1.default.findOne({ email });
        if (user) {
            const deryptedPassword = yield bcrypt_1.default.compare(password, user.password);
            if (deryptedPassword) {
                return res.status(200).json({
                    message: "welcome back",
                    data: user,
                    status: 201,
                });
            }
            else {
                return res.status(404).json({
                    message: "incorrect password",
                    data: user,
                    status: 201,
                });
            }
        }
        else {
            return res.status(404).json({
                message: "error",
                data: user,
                status: 201,
            });
        }
    }
    catch (error) {
        return res.status(404).json({ message: "Error with login", status: 404 });
    }
});
exports.LoginAccount = LoginAccount;
