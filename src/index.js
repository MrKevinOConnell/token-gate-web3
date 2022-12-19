"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.useNFTAuth = exports.useFarcasterAuth = void 0;
var FarcasterProvider_1 = require("./FarcasterProvider");
__createBinding(exports, FarcasterProvider_1, "useFarcasterAuth");
var NFTProvider_1 = require("./NFTProvider");
__createBinding(exports, NFTProvider_1, "useNFTAuth");
