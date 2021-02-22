//generate an array with 100 random numbers
let lengths = [];
let memLengths = [];
$("#start").click(bubbleSort);
$("#reset").click(reset);
init();
console.log("lengthS ", lengths);

function init() {
  for (let i = 0; i < 100; i++) {
    lengths.push(generateRandomNumber(100));
  }
  memLengths = [...lengths];
  drawLines();
}
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}
function drawLines() {
  $("#sortContainer").append(
    lengths.map((length) => {
      return `<div
          class="sortElement"
          style="height: ${length}px"
        ></div>`;
    })
  );
}
function clear() {
  $("#sortContainer").empty();
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function bubbleSort() {
  let len = lengths.length;
  for (let i = 0; i < len; i++) {
    clear();
    drawLines();
    await sleep(50);
    for (let j = 0; j < len; j++) {
      if (lengths[j] > lengths[j + 1]) {
        let tmp = lengths[j];
        lengths[j] = lengths[j + 1];
        lengths[j + 1] = tmp;
      }
    }
  }
}
function reset() {
  lengths = [...memLengths];
  clear()
  drawLines()
}