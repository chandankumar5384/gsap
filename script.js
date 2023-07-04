
var tl = gsap.timeline()

tl.from("#nav h2",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.25

})
tl.from("#main h1",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:0.25
})
tl.from("#img1",{
    y:-500,
    duration:1,
    opacity:0,
    rotate:360
})
tl.from("#img2",{
    x:500,
    duration:1,
    opacity:0,
    rotate:360,
    
})
tl.from("#img3",{
    x:-500,
    duration:1,
    opacity:0,
    rotate:360,

})