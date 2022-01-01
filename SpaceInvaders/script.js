let canvas = document.getElementById(`thisCanvas`);
let ctx = canvas.getContext("2d");

(function() {
    var requestAnimatonFrame = window.requestAnimationthisCanvasFrame || window.mozReqestAnimation || window.webkitRecuestAnimatonFrame
    window.requestAnimationFrame = requestAnimatonFrame;
    var cancleAnimatonFrame = window.cancelAnimationFrame || window.mozReqestAnimation
})
var animatoinID;


let spireBase64 = "data:image/png;base64,space-invaders-bootlogo-340338.png"
const tank = new Image();
tank.src = spireBase64;
const invaders