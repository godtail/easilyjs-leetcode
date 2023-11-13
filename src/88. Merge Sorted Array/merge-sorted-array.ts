// https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 Do not return anything, modify nums1 in-place instead.
 */
export const mergeSortedArray = (nums1: number[], m: number, nums2: number[], n: number): void => {
  let p1 = m - 1;
  let p2 = n - 1;
  let current = m + n - 1;
  while (current >= 0) {
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
