var rectangle = document.querySelector('.rectangle');
var isHovered = false;
var speed = 2;
var directionX = 1;
var directionY = 1;

window.addEventListener('load', startMovement);

function startMovement() {
  moveRectangle();
}

// Зупинити рух прямокутника
function stopMovement() {
  cancelAnimationFrame(moveRectangle);
}

rectangle.addEventListener('mouseenter', handleMouseEnter);
rectangle.addEventListener('mouseleave', handleMouseLeave);

function handleMouseEnter() {
  isHovered = true;
  stopMovement();
}

function handleMouseLeave() {
  isHovered = false;
  moveRectangle();
}

function moveRectangle() {
  var currentLeft = parseInt(rectangle.style.left) || 0;
  var currentTop = parseInt(rectangle.style.top) || 0;
  var maxX = window.innerWidth - rectangle.offsetWidth;
  var maxY = window.innerHeight - rectangle.offsetHeight;

  var newLeft = currentLeft + speed * directionX;
  var newTop = currentTop + speed * directionY;

  if (newLeft >= maxX || newLeft <= 0) {
    directionX *= -1;
  }

  if (newTop >= maxY || newTop <= 0) {
    directionY *= -1;
  }

  rectangle.style.left = newLeft + 'px';
  rectangle.style.top = newTop + 'px';

  if (!isHovered) {
    requestAnimationFrame(moveRectangle);
  }
}