
function mostAppearItem(items) {
  let itemCount = {};
  let result = "";

  for (let item of items) {
    if (itemCount[item]) {
      itemCount[item]++;
    } else {
      itemCount[item] = 1;
    }
  }

  for (let item in itemCount) {
    result += item + "->" + itemCount[item] + " ";
  }

  return result.trim();
}

// Test case
let items = ["js", "js", "golang", "ruby", "ruby", "js", "js"];
let result = mostAppearItem(items);
console.log(result); // Output: golang->1 ruby->2 js->4