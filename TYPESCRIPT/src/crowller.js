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
const superagent_1 = __importDefault(require("superagent"));
const cheerio_1 = __importDefault(require("cheerio"));
class Crowller {
    constructor() {
        this.secret = 'x3b174jsx';
        this.url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
        this.rawHtml = '';
        this.getRawHtml();
    }
    getCourseInfo(html) {
        const $ = cheerio_1.default.load(html);
        const courseItems = $('.course-item');
        courseItems.map((index, element) => {
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text();
            const count = descs
                .eq(1)
                .text()
                .split(':')[1];
            console.log(title, count);
        });
    }
    getRawHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield superagent_1.default.get(this.url);
            this.getCourseInfo(result.text);
        });
    }
}
const crowller = new Crowller();
