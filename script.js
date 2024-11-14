var crsr = document.querySelector(".cursor")
var crsrblur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrblur.style.left = dets.x - 200 + "px"
    crsrblur.style.top = dets.y - 200 + "px"
})

var a = document.querySelectorAll(".nav li a")
a.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    element.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from(".about-us img, .about-us-in",{
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 3
    }
})

// gsap.from(".card",{
//     scale: 0.8,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".card",
//         scroller: "body",
//         // markers: true,
//         start: "top 70%",
//         end: "top 65%",
//         scrub: 2
//     }
// })

gsap.from("#quote-left",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#quote-left",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#quote-right",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#quote-left",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from(".page6 h1",{
    y:90,
    scrollTrigger: {
        trigger: ".page6 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
})


