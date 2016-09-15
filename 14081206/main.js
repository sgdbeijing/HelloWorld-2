var i = 0;
var j = 0;
var n = 2;
drawPyramid(n);
function drawPyramid(n) {
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - i; j++) {
            console.log("");
        }
        for (j = 0; j < 2 * i + 1; j++) {
            console.log("*");
        }
        console.log("\n");
    }
}
