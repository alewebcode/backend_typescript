"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration = 12, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
