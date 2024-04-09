class Leaf {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(value) {
		this.root = new Leaf(value);
	}
	addLeaf(value) {
		let current = this.root;
		while (true) {
			if (value < current.value) {
				if (current.left == null) {
					current.left = new Leaf(value);
					break;
				} else current = current.left;
			} else if (current.right == null) {
				current.right = new Leaf(value);
				break;
			} else current = current.right;
		}
	}
}

let tree = new Tree(10);
tree.addLeaf(8);
tree.addLeaf(11);
tree.addLeaf(3);
tree.addLeaf(5);
console.log(tree.root.left.value);
