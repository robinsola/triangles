
// function Triangle(side1, side2, side3) {
//   this.firstSide = side1;
//   this.secondSide = side2;
//   this.thirdSide = side3;
// }

var sideSum1 = function(side1, side2) {
  return side1 + side2;
};

var sideSum2 = function(side2, side3) {
  return side2 + side3;
};

var sideSum3 = function(side1, side3) {
  return side1 + side3;
};


$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
   var Side1 = parseInt($("input#side1").val());
   var Side2 = parseInt($("input#side2").val());
   var Side3 = parseInt($("input#side3").val());

  //  var newTriangle = new Triangle(inputtedSide1, inputtedSide2, inputtedSide3);

   if(sideSum1(side1,side2) <= side3 || sideSum2(side2,side3) <= side1 || sideSum3(side1,side3) <= side2) {
      $('#not-triangle').show();
    } else if (side1 === side2 && side1 === side3) {
     $('#equilateral').show();
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $('#isosceles').show();
    } else if (side1 != side2 && side1 != side3 && side2 != side3) {
      $('#scalene').show();
    }

   event.preventDefault();
  });
});
