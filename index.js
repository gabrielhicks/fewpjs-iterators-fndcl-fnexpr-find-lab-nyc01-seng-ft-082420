const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let win = array.find(when => when.result === "W")
  if (win === undefined) {
    return undefined
  } else {
    return win.year
  }
}