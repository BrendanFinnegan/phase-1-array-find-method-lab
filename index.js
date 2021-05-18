
const superbowlWin = (arry) => {
let y = arry.find(x => x.result === 'W')
if (y) {
return y.year
}
}