class Searching {
  // O(n) time complexity
  public static linearSearch(nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }

    return -1;
  }

  // O(log n) time complexity
  // only works if array is sorted
  public static binarySearch(nums: number[], target: number): number {
    let left = 0,
      right = nums.length;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      // if num is large, will overflow
      // we can do l + ((r - l) / 2)

      if (nums[mid] === target) {
        return mid;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }

  public static binarySearchRecursive(
    nums: number[],
    target: number,
    left: number,
    right: number
  ): number {
    if (left > right) return -1;
    const mid = Math.floor(left + (right - left) / 2);
    // console.log({ mid, num: nums[mid] });

    if (nums[mid] === target) {
      return mid;
    } else if (target < mid) {
      return this.binarySearchRecursive(nums, target, left, mid - 1);
    } else {
      return this.binarySearchRecursive(nums, target, mid + 1, right);
    }
  }

  // https://leetcode.com/problems/missing-number
  // no duplicates in nums
  public static findMissingNumberXor(nums: number[]): number {
    let xorOfNums = 0;
    for (const num of nums) xorOfNums ^= num;
    for (let i = 1; i < nums.length + 1; i++) xorOfNums ^= i;

    return xorOfNums;
  }

  public static findMissingNumberSum(nums: number[]): number {
    let sum = nums.length * ((nums.length + 1) / 2);
    for (const num of nums) sum -= num;
    return sum;
  }

  // works if arr is sorted
  public static findMissingNumberIndex(nums: number[]): number | undefined {
    const sortedArr = nums.sort((a, b) => (a < b ? -1 : 1));
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i] !== sortedArr[i + 1] - 1) return i + 1;
    }
  }
}

const searching = () => {
  const nums: number[] = [0, 1, 2, 3, 4, 5, 8, 7];
  const linearSearch = Searching.linearSearch([1, 2, 3, 4, 5], 5);
  const binarySearch = Searching.binarySearch([-1, 0, 1, 2, 3, 4, 5, 8, 7], 5);
  const bsRecursive = Searching.binarySearchRecursive(nums, 5, 0, nums.length);

  const missingNums: number[] = [0, 1, 2, 3, 4, 5, 8, 7];
  const findMissingNumberXor = Searching.findMissingNumberXor(missingNums);
  const findMissingNumSum = Searching.findMissingNumberSum(missingNums);
  const findMissingNumIndex = Searching.findMissingNumberIndex(missingNums);

  console.log({
    linearSearch,
    binarySearch,
    bsRecursive,
    findMissingNumberXor,
    findMissingNumSum,
    findMissingNumIndex,
  });
};

searching();
