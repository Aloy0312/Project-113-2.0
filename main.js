circle(30, 30, 20);
describe('A white circle with black outline in the middle of a gray canvas.');

ellipse(56, 46, 55, 55);
describe('A white ellipse with black outline in middle of a gray canvas.');

rect(30, 20, 55, 55);
describe('A white rectangle with a black outline on a gray canvas.');

const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";

ctx.fillRect(0, 0, 150, 75);

function createCanvas(params) {
    canvas()
}