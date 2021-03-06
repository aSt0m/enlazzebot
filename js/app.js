var time = gsap.timeline();

time.from('#titulo', { duration: 1, x: -150 });
time.from('#paragraph', { duration: 1.5, y: 100, opacity: 0 });
time.from('#contrata', { duration: 1, opacity: 0, ease: 'bounce' });
time.to('#bot', { duration: 1, scale: 1.1, yoyo: true});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".texto", {
    scrollTrigger: ".texto", // start the animation when ".box" enters the viewport (once)
    y: 100,
    duration: 2,
   opacity: 0,

  });

gsap.from(".icono.economico", {
    scrollTrigger: ".icono.economico", // start the animation when ".box" enters the viewport (once)
    x: -100,
    duration: 2,
   opacity: 0
  });

gsap.from(".icono.rapido", {
    scrollTrigger: ".icono.rapido", // start the animation when ".box" enters the viewport (once)
    y: -100,
    duration: 2,
   opacity: 0
  });
gsap.from(".icono.fluido", {
    scrollTrigger: ".icono.fluido", // start the animation when ".box" enters the viewport (once)
    y: 100,
    duration: 2,
   opacity: 0
  });
gsap.from(".icono.amigable", {
    scrollTrigger: ".icono.amigable", // start the animation when ".box" enters the viewport (once)
    x: 100,
    duration: 2,
   opacity: 0
  });

gsap.from(".texto-2.ventaja", {
    scrollTrigger: ".texto-2.ventaja", // start the animation when ".box" enters the viewport (once)
    x: 100,
    duration: 2,
    opacity: 0
  });

  
gsap.from(".icono.mejora", {
    scrollTrigger: ".icono.mejora", // start the animation when ".box" enters the viewport (once)
    x: -100,
    duration: 2,
   opacity: 0
  });

gsap.from(".icono.oportunidades", {
    scrollTrigger: ".icono.oportunidades", // start the animation when ".box" enters the viewport (once)
    y: -100,
    duration: 2,
   opacity: 0
  });
gsap.from(".icono.marketing", {
    scrollTrigger: ".icono.marketing", // start the animation when ".box" enters the viewport (once)
    y: 100,
    duration: 2,
   opacity: 0
  });
gsap.from(".icono.datos", {
    scrollTrigger: ".icono.datos", // start the animation when ".box" enters the viewport (once)
    x: 100,
    duration: 2,
   opacity: 0
  });