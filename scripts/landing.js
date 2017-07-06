var pointsArray = document.getElementsByClassName('point');

<<<<<<< HEAD
var revealPoint = function(point) {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
  };

  var animatePoints = function(points){
    forEach(points, revealPoint);
  };

window.onload = function() {
=======
var animatePoints = function(points) {

  var revealPoint = function(index) {
    points[index].style.opacity = 1;
    points[index].style.transform = "scaleX(1) translateY(0)";
    points[index].style.msTransform = "scaleX(1) translateY(0)";
    points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
  }

  for (var i = 0; i < points.length; i++) {
    revealPoint(i);
  }
};

window.onload = function() {

>>>>>>> 8e6aa486088b92dbe554dcdf1b04f2b0d6c8481a
  if (window.innerHeight > 950) {
    animatePoints(pointsArray);
  }

<<<<<<< HEAD
  window.addEventListener("scroll", function(event) {
    if (pointsArray[0].getBoundingClientRect().top <= 500) {
      animatePoints(pointsArray);
    }
  }};
=======
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
  window.addEventListener('scroll', function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(pointsArray);
    }
  });
>>>>>>> 8e6aa486088b92dbe554dcdf1b04f2b0d6c8481a
}
