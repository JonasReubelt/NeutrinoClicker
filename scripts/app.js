var canvas;
var cdx;

var rel_detector_width = .33;
var screen_width = window.screen.availWidth;
var screen_height = window.screen.availHeight;
var dom_width = 100;
var dom_height = 100;

window.onload = function(){
    // init();
    canvas = document.getElementById('app');
    canvas.width = screen_width * rel_detector_width;
    canvas.height = screen_height;
    canvas.style.left = (screen_width * rel_detector_width).toString() + "px";
    canvas.style.position = "absolute"
    cdx = canvas.getContext('2d');
    cdx.fillStyle = "white";
    cdx.fillRect(0, 0, canvas.width, canvas.height);
    //draw_dom(0, 0);
    draw_dom(60, 60, "single");
    draw_dom(160, 160, "multi");

}

function draw_dom(x, y, kind){
    cdx.beginPath();
    cdx.fillStyle = "black";
    cdx.arc(x, y, 50, 0, 2 * Math.PI);
    cdx.fill();
    cdx.beginPath();
    cdx.fillStyle = "white";
    cdx.arc(x, y, 45, 0, 2 * Math.PI);
    cdx.fill();

    cdx.fillStyle = "gold";
    if (kind == "single"){
      cdx.beginPath();
      cdx.arc(x, y, 40, 2 * Math.PI, Math.PI);
      cdx.fill();
    }
    if (kind == "multi"){
      var xs = [-22, 0, 22, -28, 0, 28, -22, 0, 22];
      var ys = [-22, -28, -22, 0, 0, 0, 22, 28, 22];
      for (var i = 0; i < 9; i++){
        cdx.beginPath();
        cdx.arc(x + xs[i], y + ys[i], 10, 0, 2 * Math.PI);
        cdx.fill();
      }

    }
}
