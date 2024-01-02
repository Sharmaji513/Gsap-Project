var tl = gsap.timeline()

tl.from("#nav" ,{
    opacity: 0,
    delay:0.5,
})
tl.from("#nav h1 , #nav h4 , #nav h3 ", {
    y:-80,
    opacity:0,
    duration:0.8,
    stagger:0.3
})
tl.from("#left h1 ,#small-text" , {
    x: -500,
    opacity:0,
    duration:0.5,
    stagger:0.4
})

tl.from("#right img" ,{
  scale:2,
  opacity:0,
  duration:0.5
})

gsap.from("#page-2 .box" ,{
    scale: 0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger: {
        trigger:"#page-2 .box",
        scroller:"body",
        markers:true,
        start:"top "
    }

} )