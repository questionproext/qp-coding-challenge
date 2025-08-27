const swap = (nums, prev, last) => {
  while (prev < last) {
    let temp = nums[prev];
    nums[prev] = nums[last];
    nums[last] = temp;

    prev++;
    last--;
  }
};

const rotateArray = (nums, k) => {
  let prev = 0;
  let last = nums.length - 1;

  swap(nums, prev, last);
  last = k - 1;
  prev = 0;

  swap(nums, prev, last);

  last = nums.length - 1;
  prev = k;

  swap(nums, prev, last);
  return nums;
};

const arr = [-1, -100, 3, 99];
const res = rotateArray(arr, 2);
console.log(res);
