// Given an array arr that contains some integers(positive, negative or 0),
// and a range list such as [[start1,end1],[start2,end2],...], start and end are the index of arr and start always less than end.
// Your task is to calculate the sum value of each range (start index and end index are both inclusive),
// and return the maximum sum value.

function maxSum(arr, range) {
  let sums = [];
  range.forEach(function ([x, y]) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
      sum += arr[i];
    }
    sums.push(sum);
  });
  console.log(sums);
  return Math.max(...sums);
}

console.log(
  maxSum(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [
      [1, 3],
      [0, 4],
      [6, 8],
    ]
  ),
  "expect 6"
);
