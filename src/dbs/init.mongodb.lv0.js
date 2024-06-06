'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importDefault(require());
const connectString = `mongodb://localhost:27017/shopDev`;
module_1.default.connect(connectString)
    .then(() => console.log(`Connected to MongoDB successfully`))
    .catch((err) => console.log(`Error connecting to MongoDB: ${err.message}`));
// dev
if (process.env.NODE_ENV === 'development') {
    module_1.default.set('debug', true);
    module_1.default.set('debug', { color: true });
}
exports.default = module_1.default;
