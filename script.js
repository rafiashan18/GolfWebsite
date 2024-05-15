// writing code for curser circle moving
var crsr= document.querySelector("#cursor");
var blur= document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+30 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
  });
  



var h4=document.querySelectorAll("#nav h4")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function () {
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function () {
        crsr.style.scale=1;
        crsr.style.border="0px solid #fff"
        crsr.style.backgroundColor="#95C11E"
    })
})

gsap.to("#nav",{
backgroundColor:"#000",
duration:0.5,
height:"120px",

scrollTrigger:{
    trigger:"#nav",
    scroll:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
}

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        // markers:true,
        start:"top-25%",
        end:"top -70%",
        scrub:2
    }
})


gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 65%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
  
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from("#colon-1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:" top 40%",
        scrub:1
    }
})
gsap.from("#colon-2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon-2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:" top 40%",
        scrub:1
    }
})
gsap.from("#page4 h1",{
    y:50,   
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 105%",
        end:"top 70%",
        scrub:3
    }
})
// gsap.from("#page4 h1", {
//     y: 50,
//     scrollTrigger: {
//       trigger: "#page4 h1",
//       scroller: "body",
//       // markers:true,
//       start: "top 75%",
//       end: "top 70%",
//       scrub: 3,
//     },
//   });