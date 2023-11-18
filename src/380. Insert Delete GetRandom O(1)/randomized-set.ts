// https://leetcode.cn/problems/insert-delete-getrandom-o1

export class RandomizedSet {
  readonly numbers: number[] = [];
  // 使用 hashMap 来保证时间复杂度为 O(1)
  readonly map: Map<number, number> = new Map();

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }
    this.numbers.push(val);
    this.map.set(val, this.numbers.length - 1);
    return true;
  }

  remove(val: number): boolean {
    const index = this.map.get(val);
    if (index === undefined) {
      return false;
    }
    // 为了保证 O(1) 的时间复杂度，我们不能直接删除元素，而是将最后一个元素移动到被删除元素的位置
    this.numbers[index] = this.numbers[this.numbers.length - 1];
    // 修改位置后，需要同步更新 map
    this.map.set(this.numbers[index], index);
    this.numbers.pop();
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.numbers.length);
    return this.numbers[randomIndex];
  }
}
