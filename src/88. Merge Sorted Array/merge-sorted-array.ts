// https://leetcode.cn/problems/merge-sorted-array

export const mergeSortedArray = (nums1: number[], m: number, nums2: number[], n: number): void => {
  // 使用双指针
  let p1 = m - 1;
  let p2 = n - 1;
  // 避免覆盖，从后往前遍历
  let current = m + n - 1;

  while (current >= 0) {
    // 把 nums1 和 nums2 中较大的数，从后往前放入 nums1
    // 如果 p1, p2 到头了，就不用比较了，直接把剩下的数放入 nums1
    if (p1 === -1) {
      nums1[current--] = nums2[p2--];
    } else if (p2 === -1) {
      nums1[current--] = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      nums1[current--] = nums1[p1--];
    } else {
      nums1[current--] = nums2[p2--];
    }
  }
};
