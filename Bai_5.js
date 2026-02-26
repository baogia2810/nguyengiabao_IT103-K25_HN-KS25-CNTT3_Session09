function chunkArray(arr, n) {
  if (!Array.isArray(arr) || n <= 0) {
    return "dữ liệu không hợp lệ";
  }

  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
