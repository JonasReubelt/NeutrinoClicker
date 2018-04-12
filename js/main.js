var canvas;
var ctx;
var fps = 30;

var n_neutrinos = 0;

function reset() {
    n_neutrinos = 0;
}


window.onload = function() {
    init();
    canvas = document.getElementById("canvas");
    canvas.width = 300;
    canvas.height = 300;
    ctx = canvas.getContext("2d");
    setInterval(update, 1000./fps);
    canvas.addEventListener("keydown", on_key_down);
    canvas.addEventListener("click", on_click);
}

function init() {
}

function update() {
    draw_canvas();
    show_neutrinos();
}

function draw_canvas(){
    ctx.fillStyle = 'steelblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function show_neutrinos() {
    ctx.font = "30px Courier";
    ctx.fillStyle = 'white';
    ctx.fillText("Neutrinos: " + n_neutrinos, 40, 40);
}

function on_key_down(evt) {
}

function on_click(evt) {
    add_neutrinos(1);
}

function add_neutrinos(n) {
    n_neutrinos += 1;
}
