var canvas;
var cdx;
var dom_type = "single";
var optical_coupling = false;
var reflector_rings = false;
var number_of_doms = 1;

var fps = 60;

var rel_detector_width = .5;
var screen_width = window.screen.availWidth;
var screen_height = window.screen.availHeight;
var dom_width = 100;
var dom_height = 100;

window.onload = function(){
    draw_detector();
    setInterval(update, 1000./fps);
    document.addEventListener("click", click);
}

function update(){
  draw_detector();
}

function click(){
  number_of_doms += 1;
}

function draw_detector(){
  draw_water();
  var doms_left = number_of_doms;
  var number_of_strings = 1 + parseInt(number_of_doms / 18)
  for (i = 0; i < number_of_strings; i++){
    x = (screen_width  * rel_detector_width - 200) / (number_of_strings - 1) * i + 100
    if (number_of_strings == 1){
      x = screen_width  * rel_detector_width / 2;
    }
    draw_string(x-2, 100, 1/number_of_strings);

    for (j = 0; j < 18; j++){
      if (doms_left > 0){
        if (number_of_doms > 18){
          var y_space = (screen_height - 400) / 18;
          var s = 18 + number_of_doms/18;
        }
        else{
          var y_space = (screen_height - 400) / number_of_doms;
          var s = number_of_doms;
          if (s < 4){
            s = 4;
          }
        }
        draw_dom(x, 100 + y_space * (j + 1), dom_type, 4/s, optical_coupling, reflector_rings);
        doms_left--;
      }
    }
  }

  //draw_dom(100, 100, "single", 1, false, false);
  //draw_dom(100, 300, "multi", 1, false, false);
  //draw_dom(100, 500, "multi", 1, true, false);
  //draw_dom(100, 700, "multi", 1, true, true);
}

function draw_water(){
  canvas = document.getElementById('app');
  canvas.width = screen_width * rel_detector_width;
  canvas.height = screen_height;
  canvas.style.left = (screen_width * (1 - rel_detector_width) / 2).toString() + "px";
  canvas.style.position = "absolute"
  cdx = canvas.getContext('2d');
  cdx.fillStyle = "#99ffff";
  cdx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw_dom(x, y, type, scale, optical_coupling, reflector_rings){
    cdx.beginPath();
    cdx.fillStyle = "black";
    cdx.arc(x, y, 50 * scale, 0, 2 * Math.PI);
    cdx.fill();
    cdx.beginPath();
    cdx.fillStyle = "white";
    if (optical_coupling == true){
      cdx.fillStyle = "#99ffff";
    }
    cdx.arc(x, y, 45 * scale, 0, 2 * Math.PI);
    cdx.fill();

    cdx.fillStyle = "#DAA520";
    if (type == "single"){
      cdx.beginPath();
      cdx.arc(x, y, 35 * scale, 2 * Math.PI, Math.PI);
      cdx.fill();
    }
    if (reflector_rings == true && type == "multi"){
      cdx.fillStyle = "#C0C0C0";
      var xs = [-22, 0, 22, -28, 0, 28, -22, 0, 22];
      var ys = [-22, -28, -22, 0, 0, 0, 22, 28, 22];
      for (var i = 0; i < 9; i++){
        cdx.beginPath();
        cdx.arc(x + xs[i] * scale, y + ys[i] * scale, 15 * scale, 0, 2 * Math.PI);
        cdx.fill();
      }

    }
    if (type == "multi"){
      cdx.fillStyle = "#DAA520";
      var xs = [-22, 0, 22, -28, 0, 28, -22, 0, 22];
      var ys = [-22, -28, -22, 0, 0, 0, 22, 28, 22];
      for (var i = 0; i < 9; i++){
        cdx.beginPath();
        cdx.arc(x + xs[i] * scale, y + ys[i] * scale, 10 * scale, 0, 2 * Math.PI);
        cdx.fill();
      }

    }

}


function draw_string(x, y, scale){
  cdx.fillStyle = "black";
  cdx.fillRect(x, y, 5 * scale, screen_height - 3 * y)
  cdx.fillRect(x - 50 * scale, screen_height - 2 * y, 105 * scale, 20 * scale)

}
