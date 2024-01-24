class MinHeap {
  constructor() {
    this.size = 0;
    this.storage = [];
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  leftChild(index) {
    return this.storage[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.storage[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.storage[this.getParentIndex(index)];
  }
  swap(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }
  get() {
    if (this.size === 0) return new Error("Empty Heap");
    let element = this.storage[0];
    this.storage[0] = this.storage[--this.size];
    this.heapifyDown(0);
    return element;
  }
  heapifyDown(index) {
    let smallest = index;
    if (this.hasLeftChild(index) && this.storage[smallest] > this.leftChild(index))
      smallest = this.getLeftChildIndex(index);
    if (this.hasRightChild(index) && this.storage[smallest] > this.rightChild(index))
      smallest = this.getRightChildIndex(index);
    if (smallest != index) {
      this.swap(smallest, index);
      this.heapifyDown(smallest);
    }
  }
  insert(element) {
    this.storage[this.size++] = element;
    this.heapifyUp(this.size - 1);
  }
  heapifyUp(index) {
    if (this.hasParent(index) && this.parent(index) > this.storage[index]) {
      this.swap(this.getParentIndex(index), index);
      this.heapifyUp(this.getParentIndex(index));
    }
  }
}

function cookies(k, A) {
  // Write your code here
  let newHeap = new MinHeap();

  //insert array element in the heap
  for (let i = 0; i < A.length; i++) {
    newHeap.insert(A[i]);
  }

  let res = 0;
  while (newHeap.size > 0) {
    let a = newHeap.get();
    if (a >= k || newHeap.size == 0) {
      newHeap.insert(a)
      break;
    }
    let b = newHeap.get();
    newHeap.insert(a + 2 * b);
    res ++;
  }
  if (newHeap.storage[0] >= k) {
    return res;
  } else {
    return -1;
  }
}
let a = [
  21223, 22590, 48019, 54563, 28968, 65753, 84927, 64598, 75555, 31686, 3050,
  70032, 78191, 5207, 73703, 37066, 7526, 88685, 48365, 40920, 38445, 81377,
  53641, 9899, 87776, 51751, 77810, 52427, 55887, 85835, 88838, 30728, 68003,
  95312, 61591, 52278, 10467, 68863, 59954, 51011, 8251, 89, 14, 87755, 19052,
  58324, 4210, 41217, 82323, 11251, 45047, 79258, 43641, 23904, 33102, 31597,
  55786, 19945, 82616, 24683, 68891, 65746, 78166, 26933, 70624, 65429, 37015,
  29613, 8662, 7608, 36189, 34130, 51174, 54623, 71083, 75643, 91147, 61518,
  91379, 86455, 36746, 53752, 45745, 32870, 15616, 64266, 31651, 74475, 19594,
  63523, 49034, 63531, 61137, 96687, 40646, 63196, 76052, 46086, 22680, 68304,
  68059, 72978, 17492, 58959, 6732, 44231, 71208, 14000, 6948, 97454, 72881,
  57670, 7825, 45741, 14478, 9785, 80907, 20444, 29733, 97899, 57965, 63142,
  19504, 4101, 22116, 75609, 6000, 63056, 37851, 19533, 85527, 35566, 77390,
  71642, 17460, 52737, 68205, 26357, 23853, 62167, 95997, 56294, 5728, 26694,
  84279, 90265, 67267, 33015, 36936, 31718, 19264, 87748, 31523, 30576, 48512,
  56255,
];
let k = 229699;
let res = cookies(k, a);
console.log(res);
