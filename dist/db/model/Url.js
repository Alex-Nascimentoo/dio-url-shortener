"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlModel = void 0;
const mongoose_1 = require("mongoose");
const urlSchema = new mongoose_1.Schema({
    originURL: { type: String, required: true },
    shortUrl: { type: String, required: true },
    hash: { type: String, required: true }
});
exports.urlModel = (0, mongoose_1.model)('url-shortener', urlSchema);
//# sourceMappingURL=Url.js.map