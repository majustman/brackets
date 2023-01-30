module.exports = function check(str, bracketsConfig) {
  // your solution
  const brackets = getBrackets(bracketsConfig);
  const openingBrackets = brackets[0];
  const closingBrackets = brackets[1];

  if (str.length === 0) {
    return true;
  }
  if (closingBrackets.includes(str[0]) && !openingBrackets.includes(str[0])) return false;

  str = deleteNonBrackets(str, openingBrackets, closingBrackets);
  return cuttingCheck(str, openingBrackets, closingBrackets);
}

function cuttingCheck(str, opnBrck, clsBrck) {
  for (let i = 0; i < str.length; i++) {
    if (clsBrck.includes(str[i]) && i !== 0 && opnBrck.indexOf(str[i-1]) === clsBrck.indexOf(str[i])) {
      str = str.slice(0, i-1) + str.slice(i+1);
      i -= 2;
    };
  };
  return !str.length;
}

function deleteNonBrackets(str, opnBrck, clsBrck) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (opnBrck.includes(str[i]) || clsBrck.includes(str[i])) res += str[i];
  };
  return res;
}

function getBrackets(bracketsConfig) {
  const openingBrackets = [];
  const closingBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    openingBrackets.push(bracketsConfig[i][0]);
    closingBrackets.push(bracketsConfig[i][1]);
  };
  return Array.of(openingBrackets, closingBrackets);
}
