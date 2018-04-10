var type = "";

function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
};

Triangle.prototype.checker = function(side1, side2, side3) {
  if (isNaN(this.side1) || isNaN(this.side2) || isNaN(this.side3)) {
    type = "I can't compute that";
  } else if ((this.side1 + this.side2 <= this.side3) || (this.side2 + this.side3 <= this.side1) || (this.side3 + this.side1 <= this.side2)) {
    type = "not a triangle";
  } else if (this.side1 === this.side2 && this.side1 === this.side3) {
  type = "equilateral";
  } else if ((this.side1 === this.side2 && this.side2 !== this.side3) || (this.side2 === this.side3 && this.side3 !== this.side1) || (this.side3 === this.side2 && this.side2 !== this.side1)) {
    type = "isosceles";
  } else if (this.side1 !== this.side2 && this.side2 !== this.side3) {
    type = "scalene";
  }
  return type;
};

$(document).ready(function() {
  $("#sides").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var newTriangle = new Triangle(side1, side2, side3);
    var result = newTriangle.checker();
    $("#result").text(result);
  });
});
