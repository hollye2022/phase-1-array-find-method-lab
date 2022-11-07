// code your solution here

function superbowlWin(array) {
  let result = array.find(element => element.result === "W") 
  if (result === undefined) {
    return undefined;
  }
  return result.year;
}

