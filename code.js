const wrap = document.getElementById("wrapper");
const Eye = document.getElementById("eye");
const pointer = document.getElementById("pointer");
let FollowX = 5;
let FollowY = 10;
let x = 0;
let y = 0;
let friction = 1 / 12;

function animate() {
  x += (FollowX - x) * friction;
  y += (FollowY - y) * friction;
  Eye.style.transform = `translate(${-x}px,${-y}px)`;
  wrap.style.transform = `translate(-50%, -50%) perspective(600px) rotateY(${-x}deg) rotateX(${y}deg)`;
  window.requestAnimationFrame(animate);
}

window.addEventListener("mousemove", function (e) {
  pointer.style.left = `${e.pageX}px`;
  pointer.style.top = `${e.pageY}px`;
  var MouseX = Math.max(-100, Math.min(100, screen.width / 2 - e.clientX));
  var MouseY = Math.max(-100, Math.min(100, screen.height / 2 - e.clientY));
  FollowX = (12 * MouseX) / 100;

  FollowY = (10 * MouseY) / 100;
});

animate();
