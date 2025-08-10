class Questions {
  // https://leetcode.com/problems/find-the-duplicate-number
  // TC -> O(n)   SC -> O(n)
  public static findDuplicateNumberHashing(nums: number[]) {
    const frequency = new Map<number, boolean>();

    for (const num of nums) {
      if (!frequency.get(num)) {
        frequency.set(num, true);
        continue;
      }

      return num;
    }
  }

  // TC -> O(n)   SC -> O(1)
  public static findDuplicateNumXor(nums: number[]) {
    let xorOfNums = 0;

    for (let i = 1; i < nums.length; i++) xorOfNums ^= i;
    for (const num of nums) xorOfNums ^= num;

    return xorOfNums;
  }

  // https://www.naukri.com/code360/problems/find-odd-occurrence-element_1062620
  public static findOddOccuranceHash(nums: number[]): number {
    const freq = new Map<number, number>();

    for (const num of nums) {
      const item = freq.get(num);
      if (!item) {
        freq.set(num, 1);
      } else {
        freq.set(num, item + 1);
      }
    }

    let oddKey: number = -1;
    freq.forEach((val, key) => {
      if (val % 2 !== 0) oddKey = key;
    });

    return oddKey;
  }

  public static findOddOccuranceXor(nums: number[]): number {
    let xorOfNumbers = 0;
    for (const num of nums) xorOfNumbers ^= num;
    return xorOfNumbers;
  }
}

const questionsMain = () => {
  const duplicateArr = [1, 4, 3, 2, 4, 5, 6];
  const findDupNumHash = Questions.findDuplicateNumberHashing(duplicateArr);
  const findDupNumHash2 = Questions.findDuplicateNumberHashing([
    1, 2, 3, 4, 5, 6, 6, 7,
  ]);
  const findDupNumXor = Questions.findDuplicateNumXor(duplicateArr);

  const oddOccuranceInput = [1, 2, 3, 4, 1, 2, 3, 4, 5];
  const findOddOccuranceHash =
    Questions.findOddOccuranceHash(oddOccuranceInput);
  const findOddOccuranceXor = Questions.findOddOccuranceXor(oddOccuranceInput);

  console.log({
    findDupNumHash,
    findDupNumHash2,
    findDupNumXor,
    findOddOccuranceHash,
    findOddOccuranceXor,
  });
};

questionsMain();
