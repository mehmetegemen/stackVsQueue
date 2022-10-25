"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = exports.Stack = void 0;
class Stack {
    constructor(size) {
        this.items = [];
        this.size = size;
    }
    insertItem(item) {
        // A performance optimization I remember from three.js, need to benchmark it again though
        // As I remember assigning is faster than pop and shift
        this.items[this.getStackSize() + (this.isStackFull() ? -1 : 0)] = item;
        return item;
    }
    pop() {
        this.items.length = this.getStackSize() - 1;
    }
    getItem(index) {
        return this.items[this.getStackSize() - 1 - index];
    }
    getFirstItem() {
        return this.items[this.getStackSize() - 1];
    }
    getLastItem() {
        return this.items[0];
    }
    getStackSize() {
        return this.items.length;
    }
    isStackFull() {
        return this.getStackSize() === this.size;
    }
}
exports.Stack = Stack;
class Queue {
    constructor(size) {
        this.items = [];
        this.size = size;
    }
    insertItem(item) {
        this.items.length = this.getQueueSize() - 1;
        this.items.unshift(item);
        return item;
    }
    pop() {
        this.items.length = this.getQueueSize() - 1;
    }
    getItem(index) {
        return this.items[index];
    }
    getFirstItem() {
        return this.items[0];
    }
    getLastItem() {
        return this.items[this.getQueueSize() - 1];
    }
    getQueueSize() {
        return this.items.length;
    }
    isQueueFull() {
        return this.getQueueSize() === this.size;
    }
}
exports.Queue = Queue;
