var tmax_opts = {
delay: 0.5,
repeat: 0,
repeatDelay: 0.5,
yoyo: true
};

var tmax_tl = new TimelineMax(tmax_opts),
  polyme_shapes   = $('svg.polyme > svg polygon'),
  polyme_stagger  = 0.00475,
  polyme_duration = 2;

var polyme_staggerFrom = {
scale: 0,
opacity: 0,
transformOrigin: 'center center',
};

var polyme_staggerTo = {
opacity: 1,
scale: 1,
ease: Elastic.easeInOut
};

tmax_tl.staggerFromTo(polyme_shapes, polyme_duration, polyme_staggerFrom, polyme_staggerTo, polyme_stagger, 0);
