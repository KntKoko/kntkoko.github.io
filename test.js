var logo = anime.timeline({
	autoplay: false
});

var content = anime.timeline({
	autoplay: false
});

var nav = anime.timeline({
	autoplay: false
});

var nav_a = anime.timeline({
	autoplay: false
});

var blocker = anime.timeline({
	autoplay: false
});

logo
.add({
	targets: '.logo',
  duration: 500,
  rotate: '0deg',
  scale: 5
}, 0)
.add({
  targets: '.line-drawing',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
  delay: function(el, i) { return i * 250 },
  stroke: '#fff',
  direction: 'alternate',
  loop: false
}, 100)
.add({
  targets: '.line-drawing',
  duration: 5000,
  fill: '#fff'
}, 2000)
.add({
  targets: '.logo',
  duration: 1000,
  scale: 1
}, 3000)
.add({
  targets: '.logo',
  duration: 1000,
  rotate: '-45deg'
}, 3500)
.add({
  targets: '.logo',
  duration: 1500,
  top: 40,
  rotate: '45deg'
}, 4000)
.add({
  targets: '.logo',
  duration: 1500,
  rotate: '0deg'
}, 4500)
.add({
  targets: '.line-drawing',
  duration: 1000,
  fill: 'rgba(255,255,255,.5)',
}, 6000)

nav
.add({
	targets: '.nav',
  duration: 0,
  opacity: 0,
  top: 20,
}, 0)
.add({
  targets: '.nav',
  duration: 1000,
  opacity: .5,
  top: 0,
}, 6500)

nav_a
.add({
	targets: '.nav_active',
  duration: 0,
  opacity: 0,
  top: 20,
}, 0)
.add({
  targets: '.nav_active',
  duration: 1000,
  opacity: 1,
  top: 0,
}, 6500)

content
.add({
	targets: '#content',
  duration: 0,
  opacity: 0,
}, 0)
.add({
  targets: '#content',
  duration: 1000,
  opacity: 1,
}, 6000)

blocker
.add({
	targets: '#blocker',
  duration: 0,
  width: '100%',
  height: '100%',
}, 0)
.add({
  targets: '#blocker',
  duration: 1,
  width: 0,
  height: 0,
}, 6000)

/*
 var bouncingBall = anime({
      targets: '.logo',
      duration: 300,
      loop: false,
	  scale: 5,
      autoplay: false //if you don't want play animation on page load
    });
	
$(".logo").click(function() {
	bouncingBall.play();
});*/

$(document).ready(function() {
    logo.play();
    nav.play();
    nav_a.play();
    content.play();
    blocker.play();
});