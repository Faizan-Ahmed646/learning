const arr = ["lahore", "karachi", "Isl", "Pes", "Mul"];
console.log(arr);
let arr2 = [];
let i = 1;
arr.map((ar) => {
  return arr2.push(ar + "-" + parseInt(i++));
});
console.log(arr2);
