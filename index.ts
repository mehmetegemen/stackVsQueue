export class Stack {
	private items: any[] = [];
	private size!: number;	

	constructor(size:number) {
		this.size = size;
	}

	public insertItem(item: any) {
		// A performance optimization I remember from three.js, need to benchmark it again though
		// As I remember assigning is faster than pop and shift
		this.items[this.getStackSize() + (this.isStackFull() ? -1 : 0)] = item;
		return item;
	}

	public pop() {
		this.items.length = this.getStackSize() - 1;
	}

	public getItem(index: number) {
		return this.items[this.getStackSize() - 1 - index];
	}

	public getFirstItem() {
		return this.items[this.getStackSize() - 1];
	}

	public getLastItem() {
		return this.items[0];
	}

	public getStackSize() {
		return this.items.length;
	}

	public isStackFull() {
		return this.getStackSize() === this.size;
	}
}

export class Queue {
	private items: any[] = [];
	private size!: number;	

	constructor(size:number) {
		this.size = size;
	}

	public insertItem(item: any) {
		this.items.length = this.getQueueSize() - 1;
		this.items.unshift(item);
		return item;
	}

	public pop() {
		this.items.length = this.getQueueSize() - 1; 
	}

	public getItem(index: number) {
		return this.items[index];
	}

	public getFirstItem() {
		return this.items[0];
	}

	public getLastItem() {
		return this.items[this.getQueueSize() - 1];
	}

	public getQueueSize() {
		return this.items.length;
	}

	public isQueueFull() {
		return this.getQueueSize() === this.size;
	}
}